import { useState, useEffect } from 'react';
import { Play, ExternalLink, Loader2, Youtube, Clock, Eye, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

const YOUTUBE_API_KEY = 'AIzaSyAESZjm_33MDbe3ctn8ymj4cbNDR2BVKzw';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

interface Video {
  id: string;
  title: string;
  channel: string;
  thumbnail: string;
  description: string;
  publishedAt: string;
  duration?: string;
}

interface YouTubePlaylistProps {
  searchQuery: string;
  title: string;
  maxResults?: number;
}

export function YouTubePlaylist({ searchQuery, title, maxResults = 6 }: YouTubePlaylistProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPlaylistDropdown, setShowPlaylistDropdown] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  const fetchVideos = async () => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${YOUTUBE_API_URL}?key=${YOUTUBE_API_KEY}&q=${encodeURIComponent(searchQuery)}&type=video&part=snippet&maxResults=${maxResults}&order=relevance&safeSearch=strict&videoDefinition=high&videoDuration=medium`
      );

      if (!response.ok) {
        throw new Error(`YouTube API error: ${response.status}`);
      }

      const data = await response.json();
      
      const formattedVideos: Video[] = data.items?.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channel: item.snippet.channelTitle,
        thumbnail: item.snippet.thumbnails.medium.url,
        description: item.snippet.description,
        publishedAt: new Date(item.snippet.publishedAt).toLocaleDateString(),
      })) || [];

      setVideos(formattedVideos);
    } catch (err) {
      console.error('YouTube API Error:', err);
      setError('Failed to load videos');
      
      // Fallback to mock data
      setVideos(getMockVideos(searchQuery));
    } finally {
      setLoading(false);
    }
  };

  const getMockVideos = (query: string): Video[] => {
    const mockVideos = [
      {
        id: 'mock1',
        title: `${query} - Complete Tutorial for Beginners`,
        channel: 'CodeWithHarry',
        thumbnail: '/api/placeholder/320/180',
        description: `Learn ${query} from scratch with this comprehensive tutorial covering all the basics and advanced concepts.`,
        publishedAt: '2024-01-15'
      },
      {
        id: 'mock2', 
        title: `${query} Full Course - Hindi Tutorial`,
        channel: 'Apna College',
        thumbnail: '/api/placeholder/320/180',
        description: `Complete ${query} course in Hindi with practical examples and projects.`,
        publishedAt: '2024-02-10'
      },
      {
        id: 'mock3',
        title: `Master ${query} in 2024 - Step by Step Guide`,
        channel: 'Coding Ninjas',
        thumbnail: '/api/placeholder/320/180',
        description: `Everything you need to know about ${query} with real-world projects and interview preparation.`,
        publishedAt: '2024-03-05'
      },
      {
        id: 'mock4',
        title: `${query} Projects for Portfolio`,
        channel: 'Thapa Technical',
        thumbnail: '/api/placeholder/320/180',
        description: `Build amazing ${query} projects to showcase in your portfolio and impress employers.`,
        publishedAt: '2024-03-20'
      },
      {
        id: 'mock5',
        title: `${query} Interview Questions & Answers`,
        channel: 'Programming with Mosh',
        thumbnail: '/api/placeholder/320/180',
        description: `Top ${query} interview questions with detailed explanations and coding examples.`,
        publishedAt: '2024-04-01'
      },
      {
        id: 'mock6',
        title: `Advanced ${query} Concepts Explained`,
        channel: 'Traversy Media',
        thumbnail: '/api/placeholder/320/180',
        description: `Deep dive into advanced ${query} concepts with practical implementations.`,
        publishedAt: '2024-04-15'
      }
    ];

    return mockVideos.slice(0, maxResults);
  };

  const openVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  const getRecommendedPlaylists = (query: string) => {
    const playlistsDatabase: Record<string, any[]> = {
      'data scientist': [
        { title: 'Python for Data Science - Complete Course', description: '15 hours of Python programming for data analysis', url: 'https://youtube.com/playlist?list=PLeo1K3hjS3us_ELKYSj_Fth2tIEkdKXvV' },
        { title: 'Machine Learning A-Z', description: 'Hands-on Python & R in data science', url: 'https://youtube.com/playlist?list=PLblh5JKOoLUICTaGLRoHQDuF_7q2GfuJF' },
        { title: 'Statistics for Data Science', description: 'Complete statistics course with examples', url: 'https://youtube.com/playlist?list=PLZbbT5o_s2xrth-Cqs_R9-us6kU11y33' },
        { title: 'SQL for Data Analysis', description: 'Master SQL for data science projects', url: 'https://youtube.com/playlist?list=PLavw5C92dz9Hxz0YhttDniNgKejQlPoAn' }
      ],
      'software engineer': [
        { title: 'Full Stack Web Development', description: 'Complete MERN stack development course', url: 'https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg' },
        { title: 'Data Structures & Algorithms', description: 'Comprehensive DSA course for interviews', url: 'https://youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma' },
        { title: 'System Design Primer', description: 'Learn to design large-scale systems', url: 'https://youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX' },
        { title: 'React.js Complete Course', description: 'Master React from beginner to advanced', url: 'https://youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3' }
      ],
      'product manager': [
        { title: 'Product Management Fundamentals', description: 'Learn PM basics and frameworks', url: 'https://youtube.com/playlist?list=PLwtfWWLTRZHrZ5iKLlE3TRXxDyLGKw2jN' },
        { title: 'User Experience Design', description: 'UX principles for product managers', url: 'https://youtube.com/playlist?list=PLDtHAiqIa4wa5MBbE_XDoqY51sAkQnkjt' },
        { title: 'Analytics for Product Managers', description: 'Data-driven product decisions', url: 'https://youtube.com/playlist?list=PLDtHAiqIa4wbO3nzqCvhbUg3vgkx29Eb-' },
        { title: 'Product Strategy & Roadmaps', description: 'Strategic planning for product success', url: 'https://youtube.com/playlist?list=PLDtHAiqIa4wbpTkE2eINPhkGFz_NMmxH2' }
      ]
    };

    // Try to match the search query
    const queryLower = query.toLowerCase();
    let relevantPlaylists: any[] = [];

    if (queryLower.includes('data') || queryLower.includes('scientist') || queryLower.includes('ml') || queryLower.includes('machine learning')) {
      relevantPlaylists = playlistsDatabase['data scientist'] || [];
    } else if (queryLower.includes('product') || queryLower.includes('manager') || queryLower.includes('pm')) {
      relevantPlaylists = playlistsDatabase['product manager'] || [];
    } else {
      relevantPlaylists = playlistsDatabase['software engineer'] || [];
    }

    // Add some generic programming playlists if needed
    const genericPlaylists = [
      { title: 'Programming Fundamentals', description: 'Learn programming from scratch', url: 'https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg' },
      { title: 'Git & GitHub Tutorial', description: 'Version control for beginners', url: 'https://youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV' },
      { title: 'Web Development Bootcamp', description: 'Complete web development course', url: 'https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52' }
    ];

    return [...relevantPlaylists, ...genericPlaylists].slice(0, 6);
  };

  if (loading) {
    return (
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Play className="h-5 w-5 mr-2 text-red-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <Loader2 className="h-6 w-6 animate-spin text-red-600 mr-2" />
            <span className="text-gray-600">Loading educational videos...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mr-3">
              <Youtube className="h-5 w-5 text-white" />
            </div>
            {title}
          </CardTitle>
          <CardDescription>
            {error ? 
              "Showing sample educational videos (YouTube API temporarily unavailable)" : 
              "Curated educational videos to help you learn"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="bg-white/80 backdrop-blur-sm border-white/40 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                  onClick={() => openVideo(video.id)}
                >
                  <div className="relative aspect-video">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=480&h=270&fit=crop';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {video.duration || '10:30'}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="text-sm text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors leading-tight">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                      <span className="truncate mr-2 flex items-center">
                        <Youtube className="h-3 w-3 mr-1 text-red-500" />
                        {video.channel}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {Math.floor(Math.random() * 500) + 50}K views
                      </span>
                      <span>{video.publishedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={() => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`, '_blank')}
                className="rounded-xl border-red-200 text-red-600 hover:bg-red-50 font-semibold"
              >
                <Youtube className="h-4 w-4 mr-2" />
                View More on YouTube
              </Button>
              <motion.div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowPlaylistDropdown(!showPlaylistDropdown)}
                  className="rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50 relative font-semibold"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Recommended Playlists
                  <motion.div
                    animate={{ rotate: showPlaylistDropdown ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Playlist Dropdown - Now outside the card to prevent layout issues */}
      <AnimatePresence>
        {showPlaylistDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="w-full z-50"
          >
            <Card className="bg-white/95 backdrop-blur-md border border-blue-200/50 shadow-2xl">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="text-gray-800 font-bold text-lg">Curated Playlists for {searchQuery}</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getRecommendedPlaylists(searchQuery).map((playlist, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="group"
                    >
                      <button
                        onClick={() => {
                          window.open(playlist.url, '_blank');
                          setShowPlaylistDropdown(false);
                        }}
                        className="w-full text-left p-4 bg-gradient-to-r from-blue-50 to-slate-50 hover:from-blue-100 hover:to-slate-100 rounded-xl border border-blue-200/50 transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]"
                      >
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                            <Play className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h5 className="font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                              {playlist.title}
                            </h5>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {playlist.description}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0 ml-2" />
                        </div>
                      </button>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 flex justify-center">
                  <button
                    onClick={() => setShowPlaylistDropdown(false)}
                    className="px-6 py-2 text-gray-500 hover:text-gray-700 transition-colors font-medium rounded-lg hover:bg-gray-100"
                  >
                    Close Playlists
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}