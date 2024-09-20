

const RoomDataRow = ({item,index}) => {
    return (
        <tr>
            <td
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal'
            >
                {index}
            </td>
            <td
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
            >
               {item.name}
            </td>
            <td
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-centertext-sm uppercase font-normal'
            >
              {item.roomNo}
            </td>
            <td
                scope='col'
                className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
            >
                {item.floorNo}
            </td>
            <td scope='col'
                className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
            >
                {item.capacity}
            </td>
            <td
                scope='col'
                className='px-5 py-3 text-center bg-white  border-b border-gray-200 text-gray-800   text-sm uppercase font-normal'
            >
                {item.pricePerSlot}
            </td>
            <td
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-normal'
            >
                Status
            </td>
        </tr>
    );
};

export default RoomDataRow;