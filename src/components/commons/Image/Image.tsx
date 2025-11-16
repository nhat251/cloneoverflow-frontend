import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  className?: string;
  fallback?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [imgSrc, setImgSrc] = useState(src);

    const handleError = () => {
      setImgSrc(fallback);
    };

    return (
      <img
        ref={ref}
        className={classNames(styles.wrapper, className)}
        src={imgSrc}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
