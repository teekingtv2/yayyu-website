const PageHeaderTwo = ({ title }) => {
  return (
    <div className="w-full h-[20vh] lg:h-[33vh] pageHeader">
      <div className="w-full h-full bg-black/45">
        <div className="container pt-[16vh] lg:pt-[25vh]">
          <h1 className="text-white text-2xl md:text-2xl lg:text-2xl font-medium uppercase">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderTwo;
