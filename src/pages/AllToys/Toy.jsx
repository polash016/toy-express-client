

const Toy = ({toy}) => {
    const { name, seller_name, sub_category, price, available_quantity} = toy;
    return (
        <>
             <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td className="font-bold">
          {seller_name}
        </td>
        <td>
        {name}
        </td>
        <td>{sub_category}</td>
        <td>{price}</td>
        <td>{available_quantity}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        </>
    );
};

export default Toy;