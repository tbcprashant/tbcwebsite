import React, { useState } from 'react';
import { scheduleData } from '../data/scheduleData';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  // Calming, vacation-inspired color schemes for each day
  const dayColors = [
    {
      bg: 'from-rose-50 to-orange-50',
      accent: 'bg-orange-500',
      hover: 'hover:bg-orange-50/50',
      selected: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-600',
      iconBg: 'bg-orange-500',
      timelineDot: 'border-orange-200',
      timelineLine: 'bg-orange-100',
      cardBg: 'bg-orange-50/50',
      cardHover: 'hover:bg-orange-50'
    },
    {
      bg: 'from-emerald-50 to-teal-50',
      accent: 'bg-teal-500',
      hover: 'hover:bg-teal-50/50',
      selected: 'bg-teal-50',
      border: 'border-teal-200',
      text: 'text-teal-600',
      iconBg: 'bg-teal-500',
      timelineDot: 'border-teal-200',
      timelineLine: 'bg-teal-100',
      cardBg: 'bg-teal-50/50',
      cardHover: 'hover:bg-teal-50'
    },
    {
      bg: 'from-violet-50 to-purple-50',
      accent: 'bg-violet-500',
      hover: 'hover:bg-violet-50/50',
      selected: 'bg-violet-50',
      border: 'border-violet-200',
      text: 'text-violet-600',
      iconBg: 'bg-violet-500',
      timelineDot: 'border-violet-200',
      timelineLine: 'bg-violet-100',
      cardBg: 'bg-violet-50/50',
      cardHover: 'hover:bg-violet-50'
    },
    {
      bg: 'from-cyan-50 to-sky-50',
      accent: 'bg-cyan-500',
      hover: 'hover:bg-cyan-50/50',
      selected: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-600',
      iconBg: 'bg-cyan-500',
      timelineDot: 'border-cyan-200',
      timelineLine: 'bg-cyan-100',
      cardBg: 'bg-cyan-50/50',
      cardHover: 'hover:bg-cyan-50'
    },
    {
      bg: 'from-amber-50 to-yellow-50',
      accent: 'bg-amber-500',
      hover: 'hover:bg-amber-50/50',
      selected: 'bg-amber-50',
      border: 'border-amber-200',
      text: 'text-amber-600',
      iconBg: 'bg-amber-500',
      timelineDot: 'border-amber-200',
      timelineLine: 'bg-amber-100',
      cardBg: 'bg-amber-50/50',
      cardHover: 'hover:bg-amber-50'
    },
    {
      bg: 'from-blue-50 to-indigo-50',
      accent: 'bg-blue-500',
      hover: 'hover:bg-blue-50/50',
      selected: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      iconBg: 'bg-blue-500',
      timelineDot: 'border-blue-200',
      timelineLine: 'bg-blue-100',
      cardBg: 'bg-blue-50/50',
      cardHover: 'hover:bg-blue-50'
    }
  ];

  return (
    <section className={`py-24 px-4 bg-gradient-to-b ${dayColors[selectedDay].bg}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 leading-tight">
          Everyday is a dream you would wish didn't end
        </h2>
        <p className="font-light text-xl text-gray-600 text-center mb-8 md:mb-16 max-w-3xl mx-auto">
          Craftly curated to balance fun, learning and building relationships for life
        </p>

        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* Calendar Navigation - Horizontal Scroll on Mobile */}
          <div className="lg:col-span-5 overflow-x-auto pb-4 lg:pb-0">
            <div className="flex lg:flex-col gap-3 min-w-max lg:min-w-0 lg:space-y-4">
              {scheduleData.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedDay(index)}
                  className={`flex-shrink-0 w-[280px] sm:w-[320px] lg:w-full group transition-all duration-300 ${
                    selectedDay === index 
                      ? dayColors[index].selected + ' ' + dayColors[index].border
                      : 'bg-white ' + dayColors[index].hover
                  } border rounded-xl p-4 md:p-6 flex items-center gap-4`}
                >
                  {/* Date Circle */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex flex-col items-center justify-center border-2 transition-all ${
                    selectedDay === index
                      ? 'border-transparent ' + dayColors[index].accent + ' text-white'
                      : dayColors[index].border + ' group-hover:border-' + dayColors[index].border
                  }`}>
                    <span className="text-xs md:text-sm font-medium">Dec</span>
                    <span className="text-lg md:text-xl font-bold">{13 + index}</span>
                  </div>

                  {/* Day Info */}
                  <div className="flex-1 text-left">
                    <h3 className={`font-display text-base md:text-lg font-semibold mb-1 transition-colors ${
                      selectedDay === index ? dayColors[index].text : 'text-gray-800'
                    }`}>
                      Day {index + 1}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">{day.title.split(': ')[1]}</p>
                  </div>

                  <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
                    selectedDay === index ? dayColors[selectedDay].text : 'text-gray-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Day Details */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className={`${dayColors[selectedDay].accent} text-white p-4 md:p-6`}>
                <div className="flex items-center gap-3 mb-2 md:mb-3">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">{scheduleData[selectedDay].date}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  {scheduleData[selectedDay].title}
                </h3>
              </div>

              {/* Timeline */}
              <div className="p-4 md:p-6">
                <div className="space-y-6 md:space-y-8">
                  {scheduleData[selectedDay].events.map((event, index) => (
                    <div key={index} className="relative pl-8 group">
                      {/* Timeline Line */}
                      <div className={`absolute left-[11px] top-0 bottom-0 w-[2px] ${dayColors[selectedDay].timelineLine} group-last:hidden`}></div>
                      
                      {/* Timeline Dot */}
                      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 ${dayColors[selectedDay].timelineDot} bg-white flex items-center justify-center`}>
                        <Clock className={`w-3 h-3 ${dayColors[selectedDay].text}`} />
                      </div>

                      {/* Content */}
                      <div className={`${dayColors[selectedDay].cardBg} rounded-xl p-4 md:p-6 ${dayColors[selectedDay].cardHover} transition-colors`}>
                        <span className={`${dayColors[selectedDay].text} font-medium mb-2 block text-sm md:text-base`}>
                          {event.time}
                        </span>
                        <h4 className="font-display text-base md:text-lg font-semibold text-gray-800 mb-2">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}