import React from 'react';

function ProjectStartComparison() {
  return (
    <section className="container mx-auto px-4 py-8 md:px-6 md:py-12 rounded-3xl mt-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-6 md:mb-8">
        Such a Small Step, a Project Start May Still Be Dissatisfying
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-700 rounded-lg">
          {/* Header Row */}
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700">
              <th className="p-4 text-center text-lg md:text-xl font-bold text-white">
                Problems
              </th>
              <th className="p-4 text-center text-lg md:text-xl font-bold text-red-500">
                Bad Practices
              </th>
              <th className="p-4 text-center text-lg md:text-xl font-bold text-gold bg-gray-800 border-l-4 border-gold">
                Xwola's Approach
              </th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr className="border-b border-gray-700">
              <td className="p-4 bg-gray-800 text-center text-base md:text-lg font-semibold text-white">
                Problem #1: A slow project kickoff
              </td>
              <td className="p-4 bg-gray-700 text-gray-300 text-sm md:text-lg">
                ❌ Extra hours and days wasted to get the first response, arrange a call, or get a proposal put off the project start.
              </td>
              <td className="p-4 bg-gray-800 text-gray-300 text-sm md:text-lg border-l-4 border-gold">
                ✅ At Xwola, we have established and rigorously follow a protocol of communication with prospects that defines requirements for the first response time. Also, we have a rule-based algorithm for distributing requests among salespeople, which allows us to schedule the first call without delay.
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="p-4 bg-gray-800 text-center text-base md:text-lg font-semibold text-white">
                Problem #2: A gap in expectations
              </td>
              <td className="p-4 bg-gray-700 text-gray-300 text-sm md:text-lg">
                ❌ IT vendors may adopt a tell-us-what-to-do approach. They may expect their clients to come with a clear understanding of what software or IT improvements they need.
              </td>
              <td className="p-4 bg-gray-800 text-gray-300 text-sm md:text-lg border-l-4 border-gold">
                ✅ At Xwola, we understand that businesses think in terms of profit, costs, productivity, efficiency, and other business success indicators. We dive into our clients' pains or goals and offer solutions to address them best.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ProjectStartComparison;
