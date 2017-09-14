declare module 'react-image-magnify' {
    export default ReactImageMagnify;

    class ReactImageMagnify extends React.Component<ImageMagnifyProps, {}> {
    }

    export interface ImageMagnifyProps {
        className?: string;
        enlargedImageContainerClassName?: string;
        enlargedImageContainerStyle?: {};
        enlargedImageClassName?: string;
        enlargedImageStyle?: {};
        fadeDurationInMs?: number;
        hoverDelayInMs?: number;
        hoverOffDelayInMs?: number;
        isActivatedOnTouch?: boolean;
        imageClassName?: string;
        imageStyle?: {};
        largeImage: {
            alt?: string,
            src: string,
            srcSet?: string,
            sizes?: string,
            width: number,
            height: number,
        };
        lensStyle?: {};
        pressDuration?: number;
        pressMoveThreshold?: number;
        smallImage: {
            alt?: string,
            isFluidWidth?: boolean,
            src: string,
            srcSet?: [{}],
            sizes?: string,
            width?: number,
            height?: number,
        };

        style?: {};
        enlargedImagePosition?: string;
    }
}
