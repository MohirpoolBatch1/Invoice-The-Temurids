import {Fragment, useState, useId} from 'react'
import {Menu, Transition} from '@headlessui/react'
import Button from '../../components/Button/Button.jsx'
import InvoiceItem from '../../components/InvoiceItem/InvoiceItem.jsx'
import EmptyEmail from '../../assets/illustration-empty.svg'
import ArrowDownIcon from '../../assets/icon-arrow-down.svg'
import ArrowUpIcon from '../../assets/icon-arrow-up.svg'
import {useInvoicesQuery} from '../../services/invoiceApi'

function Homepage() {
  // backenddan hamma invoicelarni fetch qilib olamiz
  const {data, error, isLoading, isSuccess} = useInvoicesQuery()

  const [statusCheck, setStatusCheck] = useState({
    Draft: false,
    Pending: false,
    Paid: false,
  })

  const [datas, setDatas] = useState(data)
  const [invoiceStatus, setInvoiceStatus] = useState('total')
  const statusId = useId()
  const [showStatus, setShowStatus] = useState(false)
  const allStatus = ['Draft', 'Pending', 'Paid']
  const handleChange = e => {
    statusCheck[`${e.target.name}`] = !statusCheck[`${e.target.name}`]
    const filteredDatas = data.filter(
      item => item.status === e.target.name.toLowerCase(),
    )
    setDatas(filteredDatas)
    setInvoiceStatus(e.target.name)
  }
  return (
    <div className="w-full h-full overflow-y-scroll px-60 ">
      <div className="  flex justify-between   h-16 mt-12  items-center mb-16 ">
        <div className=" flex flex-col  ">
          <h1 className="text-gray-600 font-bold  ">Invoices</h1>
          <p className="text-body-1 text-gray-300 font-normal ">
            {isSuccess && data
              ? `There are  ${data.length} ${invoiceStatus} ${
                  data.length > 1 ? 'invoices' : 'invoice'
                }`
              : 'No invoices'}
          </p>
        </div>
        <div className="flex items-center  ">
          <Menu as="div" className="mr-6 relative w-40 ">
            <Menu.Button
              onClick={() => setShowStatus(!showStatus)}
              className="flex items-center m-auto "
            >
              <span className="font-bold text-body-1 text-gray-600 mr-4 ">
                Filter by status
              </span>
              <img
                src={showStatus ? ArrowUpIcon : ArrowDownIcon}
                alt="arrow-down-icon"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute mt-6 h-32 w-48  rounded-lg bg-white shadow-[0_10px_20px_rgba(72,84,159,0.25)]">
                {allStatus.map((status, index) => (
                  <Menu.Item key={`${statusId}${status}`}>
                    <label
                      htmlFor={status}
                      className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm cursor-pointer"
                    >
                      <input
                        onChange={handleChange}
                        name={status}
                        type="checkbox"
                        className="mr-2 cursor-pointer "
                        id={status}
                        checked={statusCheck[`${status}`]}
                      />
                      {status}
                    </label>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          <Button buttonKind="newInvoice" onClick={() => {}} type="button">
            New Invoice
          </Button>
        </div>
      </div>
      <div className="isErrorIsLoading">
        {error && <p>An error occured</p>}
        {isLoading && <p>Loading...</p>}
      </div>
      {isSuccess && data.length > 0
        ? data.map(invoice => <InvoiceItem key={invoice.id} {...invoice} />)
        : isSuccess &&
          data.length === 0 && (
            <div className="m-auto w-72  my-10 flex flex-col items-center  ">
              <img src={EmptyEmail} alt="" />
              <h2 className="text-gray-600 font-bold mt-6">
                There is nothing here
              </h2>
              <p className="text-body-1 text-gray-300 text-center mt-4 w-42 ">
                Create an invoice by clicking the
                <br />
                <span className="font-bold"> New Invoice</span> button and get
                started
              </p>
            </div>
          )}
    </div>
  )
}

export default Homepage
