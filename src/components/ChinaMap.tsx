import React, { useEffect, useState, useMemo } from 'react';
import * as d3 from 'd3';

export const ChinaMap = () => {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/yezongyang/china-geojson@master/china.json')
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Failed to load map data', err));
  }, []);

  const projection = useMemo(() => {
    if (!geoData) return null;
    return d3.geoMercator().fitSize([800, 600], geoData);
  }, [geoData]);

  const pathGenerator = useMemo(() => {
    if (!projection) return null;
    return d3.geoPath().projection(projection);
  }, [projection]);

  const paths = useMemo(() => {
    if (!geoData || !pathGenerator) return null;
    return geoData.features.map((feature: any, i: number) => {
      const pathData = pathGenerator(feature) as string;
      return (
        <g key={i} className="group">
          {/* 3D Extrusion Layer */}
          <path
            d={pathData}
            fill="#010a14"
            stroke="#00ffff"
            strokeWidth="0.5"
            strokeOpacity="0.3"
            transform="translate(0, 10)"
          />
          {/* Top Surface Layer */}
          <path
            d={pathData}
            fill="url(#mapGradient)"
            stroke="#00ffff"
            strokeWidth="1.5"
            className="transition-all duration-300 group-hover:fill-[#00ffff] group-hover:fill-opacity-50 cursor-pointer drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"
          />
        </g>
      );
    });
  }, [geoData, pathGenerator]);

  if (!geoData) return <div className="flex items-center justify-center h-full text-cyan-500 animate-pulse">Loading Map Data...</div>;

  return (
    <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00ffff" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#0066cc" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#021024" stopOpacity="0.95" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g>
        {paths}
      </g>
      <g filter="url(#glow)">
        <g transform="translate(600, 300)" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <circle r="4" fill="#ff4444" className="animate-ping" />
          <circle r="4" fill="#ff4444" />
        </g>
        
        <g transform="translate(650, 400)" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <circle r="3" fill="#ff9900" className="animate-ping" style={{ animationDelay: '0.5s' }} />
          <circle r="3" fill="#ff9900" />
        </g>
        
        <g transform="translate(550, 450)" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <circle r="5" fill="#00ffff" className="animate-ping" style={{ animationDelay: '1s' }} />
          <circle r="5" fill="#00ffff" />
        </g>
        
        <g transform="translate(700, 200)" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <circle r="3" fill="#ff4444" className="animate-ping" style={{ animationDelay: '1.5s' }} />
          <circle r="3" fill="#ff4444" />
        </g>
        
        <g transform="translate(400, 350)" className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <circle r="4" fill="#00ffff" className="animate-ping" style={{ animationDelay: '2s' }} />
          <circle r="4" fill="#00ffff" />
        </g>
      </g>
    </svg>
  );
};
