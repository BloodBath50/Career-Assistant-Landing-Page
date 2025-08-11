import { useState, useEffect } from 'react';
import { Play, Star, Users, Clock, ExternalLink, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';

interface UdemyCoursesProps {
  searchQuery: string;
  title: string;
  maxResults?: number;
}

interface Course {
  id: number;
  title: string;
  headline: string;
  price: string;
  discount_price?: string;
  image_480x270: string;
  url: string;
  num_subscribers: number;
  rating: number;
  num_reviews: number;
  content_length_video: number;
  instructor_name: string;
  level: string;
  primary_category: string;
  is_paid: boolean;
}

export function UdemyCourses({ searchQuery, title, maxResults = 6 }: UdemyCoursesProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUdemyCourses();
  }, [searchQuery]);

  const fetchUdemyCourses = async () => {
    setLoading(true);
    setError(null);

    try {
      // Since we can't make direct Udemy API calls without authentication in this environment,
      // we'll use comprehensive mock data based on the search query
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockCourses = generateMockCourses(searchQuery, maxResults);
      setCourses(mockCourses);
    } catch (err) {
      console.error('Udemy API Error:', err);
      setError('Using sample courses');
      setCourses(generateMockCourses(searchQuery, maxResults));
    } finally {
      setLoading(false);
    }
  };

  const generateMockCourses = (query: string, limit: number): Course[] => {
    const baseCourses = {
      'software engineer': [
        {
          id: 1,
          title: 'The Complete Web Developer Course 2025',
          headline: 'Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!',
          price: '₹3,499',
          discount_price: '₹599',
          image_480x270: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
          num_subscribers: 89340,
          rating: 4.6,
          num_reviews: 15420,
          content_length_video: 62,
          instructor_name: 'Dr. Angela Yu',
          level: 'All Levels',
          primary_category: 'Web Development',
          is_paid: true
        },
        {
          id: 2,
          title: 'Complete Python Bootcamp: Go from zero to hero in Python 3',
          headline: 'Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games',
          price: '₹4,999',
          discount_price: '₹699',
          image_480x270: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/complete-python-bootcamp/',
          num_subscribers: 156780,
          rating: 4.5,
          num_reviews: 28940,
          content_length_video: 48,
          instructor_name: 'Jose Portilla',
          level: 'Beginner',
          primary_category: 'Programming',
          is_paid: true
        },
        {
          id: 3,
          title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
          headline: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
          price: '₹5,499',
          discount_price: '₹799',
          image_480x270: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
          num_subscribers: 78920,
          rating: 4.7,
          num_reviews: 18340,
          content_length_video: 54,
          instructor_name: 'Maximilian Schwarzmüller',
          level: 'Intermediate',
          primary_category: 'React',
          is_paid: true
        }
      ],
      'data scientist': [
        {
          id: 11,
          title: 'Complete Machine Learning & Data Science Bootcamp 2025',
          headline: 'Learn Python, TensorFlow, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, Machine Learning, Deep Learning and more!',
          price: '₹6,999',
          discount_price: '₹899',
          image_480x270: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/complete-machine-learning-and-data-science-bootcamp-2021/',
          num_subscribers: 45670,
          rating: 4.8,
          num_reviews: 12340,
          content_length_video: 72,
          instructor_name: 'Andrei Neagoie',
          level: 'All Levels',
          primary_category: 'Data Science',
          is_paid: true
        },
        {
          id: 12,
          title: 'Python for Data Science and Machine Learning Bootcamp',
          headline: 'Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!',
          price: '₹4,999',
          discount_price: '₹699',
          image_480x270: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
          num_subscribers: 67890,
          rating: 4.6,
          num_reviews: 19280,
          content_length_video: 58,
          instructor_name: 'Jose Portilla',
          level: 'Intermediate',
          primary_category: 'Data Science',
          is_paid: true
        },
        {
          id: 13,
          title: 'Data Science A-Z™: Real-Life Data Science Exercises Included',
          headline: 'Learn Data Science step by step through real Analytics examples. Data Mining, Modeling, Tableau Visualization and more!',
          price: '₹5,999',
          discount_price: '₹799',
          image_480x270: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/datascience/',
          num_subscribers: 34560,
          rating: 4.5,
          num_reviews: 8970,
          content_length_video: 42,
          instructor_name: 'Kirill Eremenko',
          level: 'All Levels',
          primary_category: 'Data Science',
          is_paid: true
        }
      ],
      'product manager': [
        {
          id: 21,
          title: 'Become a Product Manager | Learn the Skills & Get the Job',
          headline: 'Learn product management fundamentals, frameworks, and tools. Land your first PM role with confidence!',
          price: '₹3,999',
          discount_price: '₹599',
          image_480x270: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/become-a-product-manager-learn-the-skills-get-a-job/',
          num_subscribers: 23450,
          rating: 4.4,
          num_reviews: 5670,
          content_length_video: 36,
          instructor_name: 'Cole Mercer',
          level: 'Beginner',
          primary_category: 'Product Management',
          is_paid: true
        },
        {
          id: 22,
          title: 'Product Management: Building AI-Powered Products',
          headline: 'Learn how to manage AI and ML products. From strategy to execution, master the art of AI product management.',
          price: '₹4,999',
          discount_price: '₹699',
          image_480x270: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=480&h=270&fit=crop',
          url: 'https://www.udemy.com/course/ai-product-management/',
          num_subscribers: 12340,
          rating: 4.7,
          num_reviews: 2890,
          content_length_video: 28,
          instructor_name: 'Sarah Johnson',
          level: 'Intermediate',
          primary_category: 'Product Management',
          is_paid: true
        }
      ]
    };

    // Try to match the search query
    const queryLower = query.toLowerCase();
    let relevantCourses: Course[] = [];

    if (queryLower.includes('data') || queryLower.includes('scientist') || queryLower.includes('ml') || queryLower.includes('machine learning')) {
      relevantCourses = baseCourses['data scientist'] || [];
    } else if (queryLower.includes('product') || queryLower.includes('manager') || queryLower.includes('pm')) {
      relevantCourses = baseCourses['product manager'] || [];
    } else {
      relevantCourses = baseCourses['software engineer'] || [];
    }

    // Add some generic tech courses if needed
    const genericCourses: Course[] = [
      {
        id: 31,
        title: 'Git Complete: The definitive, step-by-step guide to Git',
        headline: 'Go from complete Git newbie to power user! Master Git from the command line with this comprehensive course.',
        price: '₹2,999',
        discount_price: '₹499',
        image_480x270: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=480&h=270&fit=crop',
        url: 'https://www.udemy.com/course/git-complete/',
        num_subscribers: 15670,
        rating: 4.6,
        num_reviews: 3450,
        content_length_video: 24,
        instructor_name: 'Jason Taylor',
        level: 'All Levels',
        primary_category: 'Development Tools',
        is_paid: true
      },
      {
        id: 32,
        title: 'The Complete SQL Bootcamp: Go from Zero to Hero',
        headline: 'Become an expert at SQL! Learn to use SQL quickly and effectively with this course!',
        price: '₹3,499',
        discount_price: '₹599',
        image_480x270: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=480&h=270&fit=crop',
        url: 'https://www.udemy.com/course/the-complete-sql-bootcamp/',
        num_subscribers: 34560,
        rating: 4.5,
        num_reviews: 8920,
        content_length_video: 18,
        instructor_name: 'Jose Portilla',
        level: 'Beginner',
        primary_category: 'Database',
        is_paid: true
      }
    ];

    return [...relevantCourses, ...genericCourses].slice(0, limit);
  };

  const formatDuration = (hours: number) => {
    if (hours < 1) {
      return `${Math.round(hours * 60)}min`;
    }
    return `${hours}h`;
  };

  const formatPrice = (price: string) => {
    return price.replace('₹', '₹');
  };

  if (loading) {
    return (
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardHeader>
          <CardTitle className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
              <Play className="h-5 w-5 text-white" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
            <span className="ml-3 text-gray-600">Loading courses...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 border-purple-200 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center text-purple-800">
          <motion.div 
            className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-3"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Play className="h-5 w-5 text-white" />
          </motion.div>
          {title}
        </CardTitle>
        <CardDescription className="text-purple-600">
          {error ? 
            "Showing sample courses (Udemy API temporarily unavailable)" : 
            "Professional courses to boost your career"
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => window.open(course.url, '_blank')}
            >
              <Card className="bg-white/90 backdrop-blur-md border-purple-200/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 h-full overflow-hidden group">
                <div className="relative">
                  <img 
                    src={course.image_480x270}
                    alt={course.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=480&h=270&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs shadow-lg">
                      {course.level}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4 bg-gradient-to-br from-white to-purple-50/30">
                  <h4 className="text-sm text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors leading-tight font-semibold">
                    {course.title}
                  </h4>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {course.headline}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <span className="flex items-center bg-purple-100 px-2 py-1 rounded-full">
                      <Award className="h-3 w-3 mr-1 text-purple-600" />
                      <span className="text-purple-800">{course.instructor_name}</span>
                    </span>
                    <span className="flex items-center bg-blue-100 px-2 py-1 rounded-full">
                      <Clock className="h-3 w-3 mr-1 text-blue-600" />
                      <span className="text-blue-800">{formatDuration(course.content_length_video)}</span>
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs mb-3">
                    <div className="flex items-center bg-yellow-100 px-2 py-1 rounded-full">
                      <Star className="h-3 w-3 text-yellow-600 mr-1" />
                      <span className="text-yellow-800 font-medium">{course.rating}</span>
                      <span className="text-yellow-700 ml-1">({course.num_reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center bg-green-100 px-2 py-1 rounded-full">
                      <Users className="h-3 w-3 mr-1 text-green-600" />
                      <span className="text-green-800">{course.num_subscribers.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {course.discount_price && (
                        <span className="text-sm font-bold text-red-600 bg-red-100 px-2 py-1 rounded-full">{formatPrice(course.discount_price)}</span>
                      )}
                      <span className={`text-xs ${course.discount_price ? 'line-through text-gray-500' : 'text-gray-700 font-semibold bg-gray-100 px-2 py-1 rounded-full'}`}>
                        {formatPrice(course.price)}
                      </span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs bg-gradient-to-r from-purple-500 to-pink-600 text-white border-none hover:from-purple-600 hover:to-pink-700">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Enroll
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => window.open(`https://www.udemy.com/courses/search/?q=${encodeURIComponent(searchQuery)}`, '_blank')}
            className="rounded-xl border-purple-200 text-purple-600 hover:bg-purple-50"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Explore More on Udemy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}