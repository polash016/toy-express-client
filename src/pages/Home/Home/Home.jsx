import Banner from "../../../shared/Banner/Banner";
import CategoryTabs from "../CategoryTabs/CategoryTabs";
import ExtraSection from "../ExtraSection/ExtraSection";
import GallerySection from "../GallerySection/GallerySection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryTabs></CategoryTabs>
            <GallerySection></GallerySection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;