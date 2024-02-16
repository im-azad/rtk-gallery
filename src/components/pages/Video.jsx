import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import RelatedVidoLoader from "../ui/loaders/RelatedVideoLoader";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";

export default function Video() {
    const { videoId } = useParams();
    const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

    let content = null;
    if (isLoading) {
        content = (
            <>
                <PlayerLoader /> <DescriptionLoader />
            </>
        );
    }
    if (!isLoading && isError) {
        content = (
            <div className="col-span-12">
                <Error />
            </div>
        );
    }
    if (!isLoading && !isError && !video?.id) {
        content = <div className="col-span-12">No video found!</div>;
    }
    if (!isLoading && !isError && video?.id) {
        content = (
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                <Player link={video.link} title={video.title} />
                <Description video={video} />
            </div>
        );
    }
    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    {content}
                    {video?.id ? (
                        <RelatedVideos />
                    ) : isLoading ? (
                        <>
                            <RelatedVidoLoader />
                            <RelatedVidoLoader />
                            <RelatedVidoLoader />
                        </>
                    ) : (
                        <Error />
                    )}
                </div>
            </div>
        </section>
    );
}
