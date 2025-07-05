import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const defaultImage =
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop";

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="disable"
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={imageError ? defaultImage : props.image}
          alt={props.alt || "Project image"}
          onError={handleImageError}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default WorkImage;
