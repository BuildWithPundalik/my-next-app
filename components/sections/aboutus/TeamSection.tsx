"use client";

import { useRef, useState, useEffect } from "react";
import Usercard from "../../usercard";

const TeamSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const teamMembers = [
    {
      name: "John kabras",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face", // From mdjAVBKLOgs
    },
    {
      name: "Phillip shene moris",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", // From ZgwIEWcvlKo
    },
    {
      name: "Eqaurn Shamir mohomad",
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face", // From 4rFNxNCmdng
    },
    {
      name: "Janaka Indrajith",
      role: "Head of UX",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face", // From 55huihj4Ucg
    }, {
      name: "John kabras",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Phillip shene moris",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Eqaurn Shamir mohomad",
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Janaka Indrajith",
      role: "Head of UX",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    }, {
      name: "John kabras",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Phillip shene moris",
      role: "COO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Eqaurn Shamir mohomad",
      role: "Team Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Janaka Indrajith",
      role: "Head of UX",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
    },
  ];

  const membersPerPage = 4;
  const totalPages = Math.ceil(teamMembers.length / membersPerPage);

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const scrollX = scrollRef.current.clientWidth * pageIndex;
      scrollRef.current.scrollTo({ left: scrollX, behavior: "smooth" });
      setCurrentPage(pageIndex);
    }
  };

  const nextPage = () => {
    const nextIndex = (currentPage + 1) % totalPages;
    scrollToPage(nextIndex);
  };

  const prevPage = () => {
    const prevIndex = (currentPage - 1 + totalPages) % totalPages;
    scrollToPage(prevIndex);
  };

  useEffect(() => {
    const onScroll = () => {
      if (scrollRef.current) {
        const newPage = Math.round(
          scrollRef.current.scrollLeft / scrollRef.current.clientWidth
        );
        setCurrentPage(newPage);
      }
    };

    const scrollElement = scrollRef.current;
    scrollElement?.addEventListener("scroll", onScroll);
    return () => scrollElement?.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="px-8 py-16 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-le text-gray-900 mb-4 animate-fade-in">
            Our Team
          </h2>
        </div>

        <div className="relative">
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex">
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 snap-start px-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers
                      .slice(
                        pageIndex * membersPerPage,
                        (pageIndex + 1) * membersPerPage
                      )
                      .map((member, memberIndex) => (
                        <div
                          key={`${pageIndex}-${memberIndex}`}
                          className="transform transition-all duration-500 hover:scale-105 animate-slide-up"
                          style={{
                            animationDelay: `${memberIndex * 150}ms`,
                          }}
                        >
                          <Usercard
                            name={member.name}
                            title={member.role}
                            image={member.image}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentPage
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-slide-up {
          animation: slideUp 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
