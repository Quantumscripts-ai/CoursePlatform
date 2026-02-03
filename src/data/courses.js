/**
 * ================================================
 * LEARN - Course Data (Single Source of Truth)
 * ================================================
 * This file contains all course information.
 * Course pages import from here and only customize UI/theming.
 */

export const courses = {
  react: {
    id: 'react',
    slug: 'react',
    title: 'React Mastery',
    tagline: 'Build Modern Web Applications',
    description: 'Master React from fundamentals to advanced patterns. Learn hooks, state management, and build production-ready applications with industry best practices.',
    badge: 'Bestseller',
    themeColor: '#61dafb',
    icon: '⚛️',
    
    instructor: {
      name: 'Alex Chen',
      avatar: null,
      title: 'Senior Frontend Engineer',
      bio: '10+ years building React applications at scale. Previously at Meta and Vercel.',
    },
    
    stats: {
      rating: 4.9,
      reviewCount: 2840,
      students: 15200,
      lastUpdated: 'January 2026',
    },
    
    price: {
      original: 199,
      discounted: 99,
      currency: '$',
    },
    
    features: {
      videoHours: 42,
      projects: 8,
      articles: 35,
      resources: 50,
      certificate: true,
      lifetime: true,
    },
    
    highlights: [
      'Build 8 real-world projects from scratch',
      'Master React 19 and latest features',
      'Learn performance optimization techniques',
      'Understand advanced patterns and hooks',
      'Deploy to production with best practices',
    ],
    
    prerequisites: [
      'Basic JavaScript knowledge',
      'HTML & CSS fundamentals',
      'Understanding of web development concepts',
    ],
    
    curriculum: [
      {
        id: 1,
        module: 'React Fundamentals',
        duration: '8 hours',
        lessons: [
          { title: 'Introduction to React', duration: '45 min', preview: true },
          { title: 'JSX Deep Dive', duration: '1 hr', preview: false },
          { title: 'Components & Props', duration: '1.5 hr', preview: false },
          { title: 'State & Lifecycle', duration: '2 hr', preview: false },
          { title: 'Event Handling', duration: '1 hr', preview: false },
          { title: 'Conditional Rendering', duration: '45 min', preview: false },
        ],
      },
      {
        id: 2,
        module: 'Advanced Concepts',
        duration: '12 hours',
        lessons: [
          { title: 'React Hooks Mastery', duration: '3 hr', preview: false },
          { title: 'Context API', duration: '2 hr', preview: false },
          { title: 'useReducer Patterns', duration: '2 hr', preview: false },
          { title: 'Custom Hooks', duration: '2.5 hr', preview: false },
          { title: 'Performance Optimization', duration: '2.5 hr', preview: false },
        ],
      },
      {
        id: 3,
        module: 'Routing & State Management',
        duration: '10 hours',
        lessons: [
          { title: 'React Router v6', duration: '3 hr', preview: false },
          { title: 'Redux Toolkit', duration: '4 hr', preview: false },
          { title: 'Zustand & Jotai', duration: '3 hr', preview: false },
        ],
      },
      {
        id: 4,
        module: 'Real-World Projects',
        duration: '12 hours',
        lessons: [
          { title: 'E-commerce Platform', duration: '6 hr', preview: false },
          { title: 'Admin Dashboard', duration: '4 hr', preview: false },
          { title: 'Social Media Clone', duration: '2 hr', preview: false },
        ],
      },
    ],
  },

  ml: {
    id: 'ml',
    slug: 'machine-learning',
    title: 'Machine Learning A-Z',
    tagline: 'From Theory to Production',
    description: 'Comprehensive machine learning course covering algorithms, data preprocessing, model evaluation, and deployment. Build real predictive systems.',
    badge: 'Popular',
    themeColor: '#ff6f61',
    icon: '🤖',
    
    instructor: {
      name: 'Dr. Sarah Williams',
      avatar: null,
      title: 'AI Research Scientist',
      bio: 'PhD in Machine Learning from Stanford. Led ML teams at Google Brain.',
    },
    
    stats: {
      rating: 4.8,
      reviewCount: 1920,
      students: 11500,
      lastUpdated: 'January 2026',
    },
    
    price: {
      original: 249,
      discounted: 129,
      currency: '$',
    },
    
    features: {
      videoHours: 55,
      projects: 12,
      articles: 45,
      resources: 80,
      certificate: true,
      lifetime: true,
    },
    
    highlights: [
      'Master 15+ ML algorithms hands-on',
      'Build production-ready ML pipelines',
      'Learn feature engineering techniques',
      'Deploy models to cloud platforms',
      'Work with real-world datasets',
    ],
    
    prerequisites: [
      'Basic Python programming',
      'High school mathematics',
      'Curiosity and dedication',
    ],
    
    curriculum: [
      {
        id: 1,
        module: 'Foundations',
        duration: '10 hours',
        lessons: [
          { title: 'Python for ML', duration: '3 hr', preview: true },
          { title: 'NumPy Mastery', duration: '2 hr', preview: false },
          { title: 'Pandas for Data', duration: '2.5 hr', preview: false },
          { title: 'Statistics Essentials', duration: '2.5 hr', preview: false },
        ],
      },
      {
        id: 2,
        module: 'Core Algorithms',
        duration: '18 hours',
        lessons: [
          { title: 'Linear Regression', duration: '3 hr', preview: false },
          { title: 'Logistic Regression', duration: '3 hr', preview: false },
          { title: 'Decision Trees & Random Forests', duration: '4 hr', preview: false },
          { title: 'SVM & Kernel Methods', duration: '4 hr', preview: false },
          { title: 'K-Means & Clustering', duration: '4 hr', preview: false },
        ],
      },
      {
        id: 3,
        module: 'Model Optimization',
        duration: '12 hours',
        lessons: [
          { title: 'Feature Engineering', duration: '4 hr', preview: false },
          { title: 'Cross-Validation', duration: '3 hr', preview: false },
          { title: 'Hyperparameter Tuning', duration: '3 hr', preview: false },
          { title: 'Model Evaluation', duration: '2 hr', preview: false },
        ],
      },
      {
        id: 4,
        module: 'Industry Projects',
        duration: '15 hours',
        lessons: [
          { title: 'Price Prediction System', duration: '5 hr', preview: false },
          { title: 'Customer Segmentation', duration: '5 hr', preview: false },
          { title: 'Recommendation Engine', duration: '5 hr', preview: false },
        ],
      },
    ],
  },

  dl: {
    id: 'dl',
    slug: 'deep-learning',
    title: 'Deep Learning Mastery',
    tagline: 'Neural Networks & Beyond',
    description: 'Advanced deep learning covering neural networks, CNNs, RNNs, Transformers, and cutting-edge architectures. Build AI systems that see, read, and understand.',
    badge: 'Advanced',
    themeColor: '#7c3aed',
    icon: '🧠',
    
    instructor: {
      name: 'Prof. Michael Zhang',
      avatar: null,
      title: 'Deep Learning Researcher',
      bio: 'Author of 50+ papers on neural networks. Former researcher at DeepMind.',
    },
    
    stats: {
      rating: 4.9,
      reviewCount: 1560,
      students: 8900,
      lastUpdated: 'January 2026',
    },
    
    price: {
      original: 299,
      discounted: 149,
      currency: '$',
    },
    
    features: {
      videoHours: 65,
      projects: 10,
      articles: 60,
      resources: 100,
      certificate: true,
      lifetime: true,
    },
    
    highlights: [
      'Build neural networks from scratch',
      'Master TensorFlow & PyTorch',
      'Implement state-of-art architectures',
      'Train models on GPUs/TPUs',
      'Create generative AI applications',
    ],
    
    prerequisites: [
      'Python programming proficiency',
      'Linear algebra basics',
      'Machine Learning fundamentals',
    ],
    
    curriculum: [
      {
        id: 1,
        module: 'Neural Network Foundations',
        duration: '14 hours',
        lessons: [
          { title: 'Perceptrons & Activation', duration: '3 hr', preview: true },
          { title: 'Backpropagation', duration: '4 hr', preview: false },
          { title: 'Optimization Algorithms', duration: '4 hr', preview: false },
          { title: 'Regularization Techniques', duration: '3 hr', preview: false },
        ],
      },
      {
        id: 2,
        module: 'Computer Vision',
        duration: '18 hours',
        lessons: [
          { title: 'Convolutional Neural Networks', duration: '5 hr', preview: false },
          { title: 'Image Classification', duration: '4 hr', preview: false },
          { title: 'Object Detection', duration: '5 hr', preview: false },
          { title: 'Image Segmentation', duration: '4 hr', preview: false },
        ],
      },
      {
        id: 3,
        module: 'Sequence Models',
        duration: '16 hours',
        lessons: [
          { title: 'RNNs & LSTMs', duration: '5 hr', preview: false },
          { title: 'Attention Mechanisms', duration: '4 hr', preview: false },
          { title: 'Transformers Architecture', duration: '5 hr', preview: false },
          { title: 'BERT & GPT', duration: '2 hr', preview: false },
        ],
      },
      {
        id: 4,
        module: 'Generative AI',
        duration: '17 hours',
        lessons: [
          { title: 'Autoencoders', duration: '4 hr', preview: false },
          { title: 'GANs', duration: '6 hr', preview: false },
          { title: 'Diffusion Models', duration: '5 hr', preview: false },
          { title: 'Building AI Applications', duration: '2 hr', preview: false },
        ],
      },
    ],
  },
};

// Helper functions
export const getCourse = (courseId) => courses[courseId];
export const getAllCourses = () => Object.values(courses);
export const getCourseBySlug = (slug) => 
  Object.values(courses).find(course => course.slug === slug);
