import { useState, useEffect } from 'react';
import { CheckCircle, Circle, Trophy, Star, Target, Calendar, Award, Zap, Sparkles, TrendingUp, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { motion, AnimatePresence } from 'motion/react';

interface ProgressTrackerProps {
  roadmapSteps: Array<{
    phase: string;
    skills: string[];
    resources: Array<{ type: string; title: string; url: string }>;
  }>;
}

export function ProgressTracker({ roadmapSteps }: ProgressTrackerProps) {
  const [completedSkills, setCompletedSkills] = useState<Set<string>>(new Set());
  const [completedResources, setCompletedResources] = useState<Set<string>>(new Set());
  const [currentPhase, setCurrentPhase] = useState(0);

  // Load progress from localStorage
  useEffect(() => {
    const savedSkills = localStorage.getItem('completedSkills');
    const savedResources = localStorage.getItem('completedResources');
    const savedPhase = localStorage.getItem('currentPhase');

    if (savedSkills) {
      setCompletedSkills(new Set(JSON.parse(savedSkills)));
    }
    if (savedResources) {
      setCompletedResources(new Set(JSON.parse(savedResources)));
    }
    if (savedPhase) {
      setCurrentPhase(parseInt(savedPhase));
    }
  }, []);

  // Save progress to localStorage
  const saveProgress = () => {
    localStorage.setItem('completedSkills', JSON.stringify([...completedSkills]));
    localStorage.setItem('completedResources', JSON.stringify([...completedResources]));
    localStorage.setItem('currentPhase', currentPhase.toString());
  };

  const toggleSkill = (skill: string) => {
    const newCompleted = new Set(completedSkills);
    if (newCompleted.has(skill)) {
      newCompleted.delete(skill);
    } else {
      newCompleted.add(skill);
    }
    setCompletedSkills(newCompleted);
    setTimeout(saveProgress, 100);
  };

  const toggleResource = (resource: string) => {
    const newCompleted = new Set(completedResources);
    if (newCompleted.has(resource)) {
      newCompleted.delete(resource);
    } else {
      newCompleted.add(resource);
    }
    setCompletedResources(newCompleted);
    setTimeout(saveProgress, 100);
  };

  const getTotalSkills = () => {
    return roadmapSteps.reduce((total, step) => total + step.skills.length, 0);
  };

  const getTotalResources = () => {
    return roadmapSteps.reduce((total, step) => total + step.resources.length, 0);
  };

  const getOverallProgress = () => {
    const totalItems = getTotalSkills() + getTotalResources();
    const completedItems = completedSkills.size + completedResources.size;
    return totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  };

  const getPhaseProgress = (phaseIndex: number) => {
    const phase = roadmapSteps[phaseIndex];
    if (!phase) return 0;
    
    const totalItems = phase.skills.length + phase.resources.length;
    const completedItems = 
      phase.skills.filter(skill => completedSkills.has(skill)).length +
      phase.resources.filter(resource => completedResources.has(resource.title)).length;
    
    return totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
  };

  const getAchievements = () => {
    const achievements = [];
    const totalProgress = getOverallProgress();
    
    if (completedSkills.size >= 5) {
      achievements.push({ icon: Star, title: 'Skill Explorer', description: 'Completed 5 skills' });
    }
    if (completedResources.size >= 3) {
      achievements.push({ icon: Trophy, title: 'Resource Master', description: 'Completed 3 learning resources' });
    }
    if (totalProgress >= 25) {
      achievements.push({ icon: Target, title: 'Quarter Champion', description: '25% progress achieved' });
    }
    if (totalProgress >= 50) {
      achievements.push({ icon: Trophy, title: 'Halfway Hero', description: '50% progress achieved' });
    }
    if (totalProgress >= 75) {
      achievements.push({ icon: Star, title: 'Almost There', description: '75% progress achieved' });
    }
    if (totalProgress >= 100) {
      achievements.push({ icon: Trophy, title: 'Roadmap Champion', description: 'Completed entire roadmap!' });
    }
    
    return achievements;
  };

  const resetProgress = () => {
    setCompletedSkills(new Set());
    setCompletedResources(new Set());
    setCurrentPhase(0);
    localStorage.removeItem('completedSkills');
    localStorage.removeItem('completedResources');
    localStorage.removeItem('currentPhase');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Overall Progress Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 border-blue-200 shadow-xl relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-indigo-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <CardHeader className="relative">
            <CardTitle className="flex items-center text-xl">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Trophy className="h-6 w-6 text-blue-600" />
              </motion.div>
              Your Learning Journey
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-2"
              >
                <Sparkles className="h-4 w-4 text-purple-500" />
              </motion.div>
            </CardTitle>
            <CardDescription className="text-base">
              Master your career path with our guided 12-month roadmap
            </CardDescription>
          </CardHeader>
          <CardContent className="relative">
            <div className="space-y-6">
              {/* Enhanced Progress Bar */}
              <div>
                <div className="flex justify-between text-sm mb-3">
                  <span className="text-gray-700 font-medium">Overall Progress</span>
                  <motion.span 
                    className="text-blue-600 font-bold text-lg"
                    key={Math.round(getOverallProgress())}
                    initial={{ scale: 1.2, color: "#3b82f6" }}
                    animate={{ scale: 1, color: "#1d4ed8" }}
                    transition={{ duration: 0.3 }}
                  >
                    {Math.round(getOverallProgress())}%
                  </motion.span>
                </div>
                <div className="relative">
                  <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                      style={{ width: `${getOverallProgress()}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${getOverallProgress()}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: completedSkills.size, label: 'Skills Mastered', icon: BookOpen, color: 'text-blue-600', bgColor: 'bg-blue-100' },
                  { value: completedResources.size, label: 'Resources Done', icon: Award, color: 'text-purple-600', bgColor: 'bg-purple-100' },
                  { value: Math.round(getOverallProgress()), label: 'Progress %', icon: TrendingUp, color: 'text-green-600', bgColor: 'bg-green-100' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-white/80 rounded-2xl backdrop-blur-sm border border-white/50 shadow-sm"
                  >
                    <motion.div
                      className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-3`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </motion.div>
                    <motion.div 
                      className={`text-3xl font-bold ${stat.color} mb-1`}
                      key={stat.value}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Enhanced Phase Progress */}
      <div className="space-y-6">
        {roadmapSteps.map((step, index) => {
          const phaseProgress = getPhaseProgress(index);
          const isCurrentPhase = index === currentPhase;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`bg-white/70 backdrop-blur-md border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isCurrentPhase ? 'ring-2 ring-blue-400 ring-offset-2 bg-gradient-to-r from-blue-50/50 to-purple-50/50' : ''
                } ${phaseProgress === 100 ? 'bg-gradient-to-r from-green-50/50 to-emerald-50/50 ring-2 ring-green-300' : ''}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <motion.div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          phaseProgress === 100 ? 'bg-green-500' : isCurrentPhase ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </motion.div>
                      <CardTitle className="text-lg text-gray-800">{step.phase}</CardTitle>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge 
                        variant={phaseProgress === 100 ? 'default' : 'secondary'}
                        className={`${
                          phaseProgress === 100 
                            ? 'bg-green-500 text-white' 
                            : isCurrentPhase 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {phaseProgress === 100 ? '✓ Complete' : `${Math.round(phaseProgress)}% Done`}
                      </Badge>
                    </motion.div>
                  </div>
                  <div className="mt-3">
                    <div className="relative">
                      <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          style={{ width: `${phaseProgress}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${phaseProgress}%` }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Enhanced Skills Section */}
                    <div>
                      <h5 className="text-gray-700 mb-3 font-semibold flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
                        Skills ({step.skills.filter(skill => completedSkills.has(skill)).length}/{step.skills.length})
                      </h5>
                      <div className="space-y-2">
                        {step.skills.map((skill, skillIndex) => (
                          <motion.div 
                            key={skillIndex} 
                            className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors group"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.button
                              onClick={() => toggleSkill(skill)}
                              className="mr-3 p-1 rounded-full hover:bg-blue-100 transition-colors"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <AnimatePresence mode="wait">
                                {completedSkills.has(skill) ? (
                                  <motion.div
                                    key="completed"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    key="incomplete"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Circle className="h-5 w-5 text-gray-400 group-hover:text-blue-500" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.button>
                            <span className={`transition-all duration-300 ${
                              completedSkills.has(skill) 
                                ? 'line-through text-gray-500 font-medium' 
                                : 'text-gray-700 group-hover:text-blue-700'
                            }`}>
                              {skill}
                            </span>
                            {completedSkills.has(skill) && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="ml-auto"
                              >
                                <Star className="h-4 w-4 text-yellow-500" />
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced Resources Section */}
                    <div>
                      <h5 className="text-gray-700 mb-3 font-semibold flex items-center">
                        <Award className="h-4 w-4 mr-2 text-purple-500" />
                        Resources ({step.resources.filter(resource => completedResources.has(resource.title)).length}/{step.resources.length})
                      </h5>
                      <div className="space-y-2">
                        {step.resources.map((resource, resourceIndex) => (
                          <motion.div 
                            key={resourceIndex} 
                            className="flex items-center p-2 rounded-lg hover:bg-white/50 transition-colors group"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <motion.button
                              onClick={() => toggleResource(resource.title)}
                              className="mr-3 p-1 rounded-full hover:bg-purple-100 transition-colors"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <AnimatePresence mode="wait">
                                {completedResources.has(resource.title) ? (
                                  <motion.div
                                    key="completed"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    key="incomplete"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <Circle className="h-5 w-5 text-gray-400 group-hover:text-purple-500" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.button>
                            <span className={`transition-all duration-300 ${
                              completedResources.has(resource.title) 
                                ? 'line-through text-gray-500 font-medium' 
                                : 'text-gray-700 group-hover:text-purple-700'
                            }`}>
                              {resource.title}
                            </span>
                            {completedResources.has(resource.title) && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="ml-auto"
                              >
                                <Zap className="h-4 w-4 text-blue-500" />
                              </motion.div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Achievements */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
            Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getAchievements().map((achievement, index) => (
              <div key={index} className="flex items-center p-3 bg-white/60 rounded-lg">
                <achievement.icon className="h-6 w-6 text-yellow-600 mr-3" />
                <div>
                  <div className="text-sm text-gray-800">{achievement.title}</div>
                  <div className="text-xs text-gray-600">{achievement.description}</div>
                </div>
              </div>
            ))}
            {getAchievements().length === 0 && (
              <div className="col-span-full text-center text-gray-600 py-4">
                Complete your first skill or resource to unlock achievements!
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Controls */}
      <Card className="bg-white/60 backdrop-blur-sm border-white/30">
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              Progress saved automatically
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={resetProgress}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Reset Progress
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}