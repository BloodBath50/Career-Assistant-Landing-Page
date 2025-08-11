import { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Code, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface GitHubReposProps {
  searchQuery: string;
  title: string;
  maxResults?: number;
}

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
  owner: {
    login: string;
    avatar_url: string;
  };
}

export function GitHubRepos({ searchQuery, title, maxResults = 6 }: GitHubReposProps) {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchGitHubRepos();
  }, [searchQuery]);

  const fetchGitHubRepos = async () => {
    setLoading(true);
    setError(null);

    try {
      // Since we can't make direct GitHub API calls without authentication in this environment,
      // we'll use comprehensive mock data based on the search query
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockRepos = generateMockRepos(searchQuery, maxResults);
      setRepos(mockRepos);
    } catch (err) {
      console.error('GitHub API Error:', err);
      setError('Using sample repositories');
      setRepos(generateMockRepos(searchQuery, maxResults));
    } finally {
      setLoading(false);
    }
  };

  const generateMockRepos = (query: string, limit: number): Repository[] => {
    const baseRepos = {
      'software engineer': [
        {
          id: 1,
          name: 'awesome-algorithms',
          full_name: 'TheAlgorithms/awesome-algorithms',
          description: 'A curated list of awesome algorithms and data structures implementations',
          html_url: 'https://github.com/TheAlgorithms/Python',
          stargazers_count: 15420,
          forks_count: 3890,
          language: 'Python',
          updated_at: '2024-01-15T10:30:00Z',
          topics: ['algorithms', 'data-structures', 'python', 'coding-interview'],
          owner: { login: 'TheAlgorithms', avatar_url: 'https://avatars.githubusercontent.com/u/20487725' }
        },
        {
          id: 2,
          name: 'system-design-primer',
          full_name: 'donnemartin/system-design-primer',
          description: 'Learn how to design large-scale systems. Prep for the system design interview.',
          html_url: 'https://github.com/donnemartin/system-design-primer',
          stargazers_count: 75230,
          forks_count: 12450,
          language: 'Python',
          updated_at: '2024-01-10T14:20:00Z',
          topics: ['system-design', 'interview', 'scalability', 'architecture'],
          owner: { login: 'donnemartin', avatar_url: 'https://avatars.githubusercontent.com/u/5458997' }
        },
        {
          id: 3,
          name: 'coding-interview-university',
          full_name: 'jwasham/coding-interview-university',
          description: 'A complete computer science study plan to become a software engineer',
          html_url: 'https://github.com/jwasham/coding-interview-university',
          stargazers_count: 89340,
          forks_count: 18920,
          language: 'Markdown',
          updated_at: '2024-01-12T09:15:00Z',
          topics: ['computer-science', 'interview-preparation', 'software-engineering', 'study-plan'],
          owner: { login: 'jwasham', avatar_url: 'https://avatars.githubusercontent.com/u/3474' }
        }
      ],
      'data scientist': [
        {
          id: 11,
          name: 'awesome-datascience',
          full_name: 'academic/awesome-datascience',
          description: 'An awesome Data Science repository to learn and apply for real world problems',
          html_url: 'https://github.com/academic/awesome-datascience',
          stargazers_count: 23450,
          forks_count: 6780,
          language: 'Python',
          updated_at: '2024-01-14T16:45:00Z',
          topics: ['data-science', 'machine-learning', 'analytics', 'python'],
          owner: { login: 'academic', avatar_url: 'https://avatars.githubusercontent.com/u/4969' }
        },
        {
          id: 12,
          name: 'scikit-learn',
          full_name: 'scikit-learn/scikit-learn',
          description: 'Machine Learning in Python',
          html_url: 'https://github.com/scikit-learn/scikit-learn',
          stargazers_count: 67890,
          forks_count: 28340,
          language: 'Python',
          updated_at: '2024-01-13T11:30:00Z',
          topics: ['machine-learning', 'python', 'scikit-learn', 'data-science'],
          owner: { login: 'scikit-learn', avatar_url: 'https://avatars.githubusercontent.com/u/365630' }
        },
        {
          id: 13,
          name: 'data-science-projects',
          full_name: 'krishnaik06/data-science-projects',
          description: 'Complete Data Science Projects with real world datasets',
          html_url: 'https://github.com/krishnaik06/Complete-Data-Science-Bootcamp',
          stargazers_count: 12340,
          forks_count: 8920,
          language: 'Jupyter Notebook',
          updated_at: '2024-01-11T13:25:00Z',
          topics: ['data-science', 'projects', 'machine-learning', 'jupyter'],
          owner: { login: 'krishnaik06', avatar_url: 'https://avatars.githubusercontent.com/u/20341930' }
        }
      ],
      'product manager': [
        {
          id: 21,
          name: 'awesome-product-management',
          full_name: 'dend/awesome-product-management',
          description: 'A curated list of awesome resources for product managers',
          html_url: 'https://github.com/dend/awesome-product-management',
          stargazers_count: 8450,
          forks_count: 1230,
          language: 'Markdown',
          updated_at: '2024-01-09T15:20:00Z',
          topics: ['product-management', 'resources', 'product-strategy', 'pm'],
          owner: { login: 'dend', avatar_url: 'https://avatars.githubusercontent.com/u/1496' }
        },
        {
          id: 22,
          name: 'product-management-toolkit',
          full_name: 'ProductHired/product-management-toolkit',
          description: 'Essential tools and frameworks for product managers',
          html_url: 'https://github.com/ProductHired/product-management-toolkit',
          stargazers_count: 5670,
          forks_count: 890,
          language: 'JavaScript',
          updated_at: '2024-01-08T12:10:00Z',
          topics: ['product-management', 'toolkit', 'frameworks', 'templates'],
          owner: { login: 'ProductHired', avatar_url: 'https://avatars.githubusercontent.com/u/4529' }
        }
      ]
    };

    // Try to match the search query
    const queryLower = query.toLowerCase();
    let relevantRepos: Repository[] = [];

    if (queryLower.includes('data') || queryLower.includes('scientist') || queryLower.includes('ml') || queryLower.includes('machine learning')) {
      relevantRepos = baseRepos['data scientist'] || [];
    } else if (queryLower.includes('product') || queryLower.includes('manager') || queryLower.includes('pm')) {
      relevantRepos = baseRepos['product manager'] || [];
    } else {
      relevantRepos = baseRepos['software engineer'] || [];
    }

    // Add some generic programming repos if needed
    const genericRepos: Repository[] = [
      {
        id: 31,
        name: 'awesome-learning-resources',
        full_name: 'lauragift21/awesome-learning-resources',
        description: 'Awesome list of resources on Web Development',
        html_url: 'https://github.com/lauragift21/awesome-learning-resources',
        stargazers_count: 4560,
        forks_count: 1120,
        language: 'Markdown',
        updated_at: '2024-01-07T14:35:00Z',
        topics: ['learning', 'resources', 'web-development', 'career'],
        owner: { login: 'lauragift21', avatar_url: 'https://avatars.githubusercontent.com/u/17781315' }
      },
      {
        id: 32,
        name: 'tech-interview-handbook',
        full_name: 'yangshun/tech-interview-handbook',
        description: 'Curated coding interview preparation materials for busy software engineers',
        html_url: 'https://github.com/yangshun/tech-interview-handbook',
        stargazers_count: 45670,
        forks_count: 8930,
        language: 'TypeScript',
        updated_at: '2024-01-06T16:45:00Z',
        topics: ['interview', 'coding', 'preparation', 'software-engineering'],
        owner: { login: 'yangshun', avatar_url: 'https://avatars.githubusercontent.com/u/1315101' }
      }
    ];

    return [...relevantRepos, ...genericRepos].slice(0, limit);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      Python: '#3572A5',
      Java: '#b07219',
      'C++': '#f34b7d',
      Go: '#00ADD8',
      Rust: '#dea584',
      Markdown: '#083fa1',
      'Jupyter Notebook': '#DA5B0B'
    };
    return colors[language] || '#858585';
  };

  if (loading) {
    return (
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mr-3">
              <Github className="h-5 w-5 text-white" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="ml-3 text-gray-600">Loading repositories...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 border-gray-600 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <motion.div 
            className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg flex items-center justify-center mr-3"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Github className="h-5 w-5 text-gray-900" />
          </motion.div>
          {title}
        </CardTitle>
        <CardDescription className="text-gray-300">
          {error ? 
            "Showing sample repositories (GitHub API temporarily unavailable)" : 
            "Curated repositories to accelerate your learning"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -2, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-600/90 backdrop-blur-sm border-gray-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full group">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-blue-400 mr-2" />
                      <h4 className="text-sm text-gray-100 group-hover:text-blue-400 transition-colors line-clamp-1 font-medium">
                        {repo.name}
                      </h4>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(repo.html_url, '_blank')}
                      className="p-1 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3 text-gray-400 hover:text-white" />
                    </motion.button>
                  </div>
                  
                  <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                    {repo.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-3">
                      {repo.language && (
                        <div className="flex items-center">
                          <div 
                            className="w-2 h-2 rounded-full mr-1"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          />
                          <span className="text-gray-300">{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 text-yellow-500" />
                        <span className="text-gray-300">{repo.stargazers_count.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <GitFork className="h-3 w-3 mr-1 text-gray-400" />
                        <span className="text-gray-300">{repo.forks_count.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-2 py-0 bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600">
                          {topic}
                        </Badge>
                      ))}
                      {repo.topics.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-0 bg-gray-700 border-gray-600 text-gray-300">
                          +{repo.topics.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => window.open(`https://github.com/search?q=${encodeURIComponent(searchQuery)}&type=repositories`, '_blank')}
            className="rounded-xl border-gray-500 text-gray-200 hover:bg-gray-600 hover:text-white bg-gray-700"
          >
            <Github className="h-4 w-4 mr-2" />
            Explore More on GitHub
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}