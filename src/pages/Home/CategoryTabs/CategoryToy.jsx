

const CategoryToy = ({category, toys}) => {
    const categoryToys = toys.filter((toy) => toy.sub_category === category);

    return (
        <div className="grid grid-cols-3 mt-8">
            {
                categoryToys.map(toy => (
                    <div key={toy._id} className="card w-96 glass">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{toy.name}</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
                ))
            }
        </div>
    );
};

export default CategoryToy;