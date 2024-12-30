import React from 'react';

const SkeletonLoader = ({width = 'w-full', height = 'h-20', borderRadius = 'rounded-md', margin = "my-0"}) => {
  return (
    <div
      className={`${width} ${height} ${borderRadius } ${margin} relative overflow-hidden`}
      style={{
        background: '#e2e8f0'
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
          animation: 'shimmer 1.5s infinite',
        }}
      />
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default SkeletonLoader;