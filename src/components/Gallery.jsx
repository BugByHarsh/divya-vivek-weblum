import { useState, useEffect, useRef } from "react";
import SectionHead from "./SectionHead";
import useReveal from "../hooks/useReveal";

const galleryFiles = import.meta.glob(
  "../assets/gallery/*.webp",
  { eager: true, query: "?url", import: "default" }
);

const TOTAL_IMAGES = Object.keys(galleryFiles).length;
const IMAGES_PER_PAGE = 24;

const buildMasonry = (images, columnCount, imageSizes) => {
  const columns = Array.from({ length: columnCount }, () => []);
  const heights = Array(columnCount).fill(0);

  images.forEach((image) => {
    let shortestColumn = 0;

    for (let index = 1; index < columnCount; index++) {
      if (heights[index] < heights[shortestColumn]) {
        shortestColumn = index;
      }
    }

    columns[shortestColumn].push(image);

    const size = imageSizes[image.id];
    const ratio = size ? size.height / size.width : 1;
    heights[shortestColumn] += ratio;
  });

  return columns;
};

const ALL_IMAGES = Object.entries(galleryFiles)
  .sort(([firstPath], [secondPath]) => {
    const firstId = Number(firstPath.match(/(\d+)\.webp$/)?.[1]);
    const secondId = Number(secondPath.match(/(\d+)\.webp$/)?.[1]);
    return firstId - secondId;
  })
  .map(([path, image]) => ({
    id: Number(path.match(/(\d+)\.webp$/)?.[1]),
    thumb: image,
    full: image,
  }));

export default function Gallery() {
  const [ref, isIn] = useReveal();

  const [currentPage, setCurrentPage] = useState(1);
  const [colCount, setColCount] = useState(6);
  const [imageSizes, setImageSizes] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const totalPages = Math.ceil(
    TOTAL_IMAGES / IMAGES_PER_PAGE
  );

  // Responsive columns
  useEffect(() => {
    const updateLayout = () => {
      setColCount(
        window.innerWidth <= 768 ? 3 : 6
      );
    };

    updateLayout();

    window.addEventListener(
      "resize",
      updateLayout
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateLayout
      );
    };
  }, []);

  const visibleImages = ALL_IMAGES.slice(
    0,
    currentPage * IMAGES_PER_PAGE
  );
  const columns = buildMasonry(
    visibleImages,
    colCount,
    imageSizes
  );

  const handleImageLoad = (imageId, event) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;

    setImageSizes((sizes) => {
      if (sizes[imageId]) {
        return sizes;
      }

      return {
        ...sizes,
        [imageId]: {
          width: naturalWidth,
          height: naturalHeight,
        },
      };
    });
  };

  const handleLoadMore = () => {
    if (
      loading ||
      currentPage >= totalPages
    ) {
      return;
    }

    setLoading(true);

    // Small delay keeps the loading animation
    // and makes the "View All Moments" interaction
    // feel smoother.
    setTimeout(() => {
      setCurrentPage(
        (page) => page + 1
      );

      setLoading(false);
    }, 300);
  };

  useEffect(() => {
    document.body.style.overflow =
      selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="px-4 sm:px-6 lg:px-[6vw] py-8"
    >
      <SectionHead
        kicker="Every Guest, Every Grin"
        title="A Collection of Moments"
      />

      {/* Masonry Gallery */}
      <div
        ref={ref}
        className={`reveal ${isIn ? "in" : ""
          } max-w-[1400px] mx-auto grid gap-1`}
        style={{
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
        }}
      >
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-1">
            {column.map((image) => (
              <div
                key={image.id}
                className="w-full overflow-hidden rounded-md bg-gray-200 cursor-pointer shadow-[0_10px_24px_rgba(74,47,40,0.12)]"
                onClick={() => setSelectedImage(image.full)}
              >
                <img
                  src={image.thumb}
                  alt={`Memory ${image.id}`}
                  className="block w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                  onLoad={(event) => handleImageLoad(image.id, event)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center pt-12">
          <div className="h-8 w-8 border-4 border-rose-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Load More */}
      {!loading &&
        currentPage < totalPages && (
          <div className="flex justify-center pt-12 pb-5">
            <button
              onClick={handleLoadMore}
              className="
    inline-block
    px-8 py-3
    rounded-full
    border border-[#b995d4]/60
    bg-[#ffffff]/10
    text-[#7b557f]
    font-script
    tracking-[2px]
    uppercase
    text-[12.5px]
    transition-all
    duration-300
    hover:bg-[#8f6aa8]
    hover:text-[#fff8ed]
    hover:border-[#8f6aa8]
    hover:shadow-[0_10px_24px_rgba(116,82,145,0.28)]
  "
            >
              View All Moments ♥
            </button>
          </div>
        )}

      {/* Fullscreen Image */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-50
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <div
            className="
              relative
              max-w-4xl
              max-h-[90vh]
              w-full
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              className="
                absolute
                top-2
                right-2
                text-white
                bg-black/50
                p-2
                rounded-full
                hover:bg-black/70
                transition
                z-10
              "
              onClick={() =>
                setSelectedImage(null)
              }
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Selected memory"
              className="
                object-contain
                max-h-[80vh]
                w-full
                rounded
                shadow-lg
              "
            />
          </div>
        </div>
      )}
    </section>
  );
}