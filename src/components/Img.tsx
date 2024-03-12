interface Props {
  className: string;
  src: string;
  alt: string;
}

function Img({
  className,
  src = "https://blog.theodo.com/static/c7a7df409c9821ca8a4fccf842d992fd/8c8bd/loading.png",
  alt,
}: Props) {
  return <img className={className} src={src} alt={alt} loading={"lazy"} />;
}

export default Img;
