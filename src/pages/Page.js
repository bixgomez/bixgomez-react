import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {
  const { slug } = useParams(); // This will give us the dynamic URL part
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch page data from the WordPress REST API using the slug
    fetch(`https://llanokidbooks.ddev.site/wp-json/wp/v2/pages?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPageData(data[0]); // WordPress API returns an array
        } else {
          setError('Page not found');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load page data');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{pageData.title.rendered}</h1>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}
      />
    </div>
  );
};

export default Page;
