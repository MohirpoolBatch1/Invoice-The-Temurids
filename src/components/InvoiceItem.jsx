import {Link} from 'react-router-dom'

export default function InvoiceItem({id, date, author, price, status}) {
  return (
    <div className="flex justify-around bg-white w-7/12 h-16 p-5 rounded-xl">
      <span className="font-bold">{id}</span>
      <span className="text-gray-300">{date}</span>
      <span className="text-gray-300">{author}</span>
      <span className="font-bold text-xl">{price}</span>
      <li
        className={
          status === 'Pending'
            ? 'bg-[#f7f0d7] text-[#ff8f00] -mt-2 py-2 px-3 h-10 rounded-lg'
            : 'bg-[#bbffee] text-[#33d693] -mt-2 py-2 px-3 h-10 rounded-lg'
        }
      >
        {status}
      </li>
      <span>
        <Link to={`/invoice/${id}`} className="text-purple font-bold">
          &gt;
        </Link>
      </span>
    </div>
  )
}
