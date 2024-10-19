import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImageItem from "./ImageItem";

function CampaignImages({ images }) {
  return (
    <div className="order-1 col-span-12 md:order-2 md:col-span-6 lg:col-span-8">
      <div className="mx-auto flex h-full w-4/5 items-center justify-center">
        {images.length === 0 ? (
          <span>Chưa có hình ảnh</span>
        ) : (
          <Carousel>
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <ImageItem image={image} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default CampaignImages;
