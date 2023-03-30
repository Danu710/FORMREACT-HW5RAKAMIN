import React from "react";

const TableComponent = ({ data }) => {
  //   const { data } = props;

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-4 my-8 flex flex-col">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-extrabold  text-greenTokped">
          Table <span className="text-black">Component</span>
        </h1>
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mx-4 px-4 mt-8">
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                FirstName
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                LastName
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Age
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Salary
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Email
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.firstName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.lastName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.age}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.allowance}
                </td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
