import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import './Review.css';

const review = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6lZJ1sgRzwv6DARHJdNx3IImEukvu5DHbA&s",
    name: "Harry Stamer",
    title: "Manager",
    quote: "I feel fortunate to have had a consultation with an astrologist. His insights were truly moving and have shifted my perspective on myself and my children.",
    
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6lZJ1sgRzwv6DARHJdNx3IImEukvu5DHbA&s",
    name: "PR. Priti Jain",
    country: "London",
    quote: "The Phone number is accessible and answered and on request is transferred to concerned. The concerned had the idea of work of the caller. Caller is at ease on getting assurance that the requested work will be given Priority"
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6lZJ1sgRzwv6DARHJdNx3IImEukvu5DHbA&s",
    name: "CA Rohit Shah",
    country: "Germany",
    quote: "Deserunt, quasi illum eius optio ipsa cum fugiat aut! Ducimus ad accusamus unde."
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6lZJ1sgRzwv6DARHJdNx3IImEukvu5DHbA&s",
    name: "Ashok",
    title: "CA",
    quote: "Amet consectetur adipisicing elit. Blanditiis cum similique consectetur consequuntur accusantium ut distinctio nam. Deserunt, quasi illum eius optio ipsa cum fugiat aut! Ducimus ad accusamus unde."
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu6lZJ1sgRzwv6DARHJdNx3IImEukvu5DHbA&s",
    name: "Atharv",
    country: "West Mumbai",
    quote: "Blanditiis cum similique consectetur consequuntur accusantium ut distinctio nam. Deserunt, quasi illum eius optio ipsa cum fugiat aut! Ducimus ad accusamus unde."
  }
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prevIndex => (prevIndex + 1) % review.length);
    }, 7000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <Box
      sx={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxSizing: 'border-box',
        backgroundColor:"#FFFAFA"
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '80%', md: '100%', lg: '100%' },
          maxWidth: 600,
          overflow: 'hidden',
          textAlign: 'center',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative' 
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`,
            display: 'flex',
            width: `${review.length * 100}%`,
            height: '100%',
          }}
        >
          {review.map((item,) => (
            <Box
              key={item.id}
              sx={{
                flex: '0 0 100%',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
                textAlign: 'center'
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginBottom: '1rem',
                  objectFit: 'cover'
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                {item.name}
              </Typography>
              {item.title && (
                <Typography variant="subtitle1" sx={{ color: 'gray', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  {item.title}
                </Typography>
              )}
              {item.country && (
                <Typography variant="subtitle1" sx={{ color: 'gray', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  {item.country}
                </Typography>
              )}
              <Typography variant="body1" sx={{ marginTop: 1, fontSize: { xs: '0.875rem', sm: '1rem' },width:"15%", }}>
                "{item.quote}"
              </Typography>

            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
