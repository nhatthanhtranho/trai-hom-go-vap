import React from 'react';

interface HeadlineItem {
  title: string;
  id: string;
}

interface PropTypes {
  items: HeadlineItem[];
}

const PostHeadline: React.FC<PropTypes> = ({ items }) => {
  return (
    <nav className="mt-6 p-4 bg-gray-50 rounded-md border border-gray-100 shadow-sm max-w-3xl">
      <h2 className="font-semibold mb-2 text-gray-800">Mục lục</h2>
      <ul className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={item.id} className="hover:text-yellow-700">
              {`${index + 1}. ${item.title}`}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default React.memo(PostHeadline);
