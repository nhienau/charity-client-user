import OptimizedImage from "@/ui/OptimizedImage";

function ImageItem({ image }) {
  const { url } = image;

  return (
    <div className="relative aspect-video overflow-hidden">
      <a href={url} target="_blank">
        <OptimizedImage
          url={url}
          className="aspect-video h-full w-full object-contain"
        />
      </a>
    </div>
  );
}

export default ImageItem;
