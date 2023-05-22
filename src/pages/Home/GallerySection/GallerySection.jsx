import photo1 from '../../../../src/image/login1.jpg'
import photo2 from '../../../../src/image/login.jpg'
import photo3 from '../../../../src/image/regular2.jpg'
import photo4 from '../../../../src/image/regular4.jpg'
import photo5 from '../../../../src/image/regular6.jpg'
import photo6 from '../../../../src/image/sports12.jpg'
import photo7 from '../../../../src/image/sports2.jpg'
import photo8 from '../../../../src/image/sports3.jpg'
import photo9 from '../../../../src/image/truck2.jpg'
import photo10 from '../../../../src/image/cover.jpg'

const GallerySection = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img src={photo3} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo2} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo9} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo10} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo5} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo1} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo6} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo4} />
            <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={photo8} />
            <img src={photo7} alt="" className="w-full col-span-2 row-span-2 rounded shadow-sm h-3/4 min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
        </div>
    </section> 
    );
};

export default GallerySection;