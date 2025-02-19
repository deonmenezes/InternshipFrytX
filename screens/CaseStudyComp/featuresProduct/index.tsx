import AnimationProduct from "./animation";
const FeaturesProduct = (props: any) => {
  return (
    <>
      <div className=" bg-secondary-900 py-12">
        <div className="container mx-auto px-20 max-lg:px-16 max-md:px-12">
          <div className="heading-comp">
            <h1 className="text-white heading">Features & Product</h1>
            <span className="text-[#79C5C7] text-6xl font-light">06</span>
          </div>
        </div>
        {props.featureAndProduct && (
          <AnimationProduct card={props.featureAndProduct} />
        )}
      </div>
    </>
  );
};

export default FeaturesProduct;
