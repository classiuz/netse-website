import {
  BsEnvelopeFill,
  BsFacebook,
  BsGeoAltFill,
  BsInstagram,
  BsLinkedin,
  BsTelephoneFill,
  BsWhatsapp,
} from 'react-icons/bs'

import { FaBook, FaBookmark, FaBriefcase, FaWifi, FaCaretDown, FaCaretUp, FaQuestion } from 'react-icons/fa'

import { MdCheckCircleOutline, MdClose, MdErrorOutline, MdMenu, MdSearch, MdWarningAmber } from 'react-icons/md'

const icons = {
  facebook: <BsFacebook />,
  instagram: <BsInstagram />,
  linkedin: <BsLinkedin />,
  email: <BsEnvelopeFill />,
  maps: <BsGeoAltFill />,
  telephone: <BsTelephoneFill />,
  whatsapp: <BsWhatsapp />,
  menu: <MdMenu />,
  xmark: <MdClose />,
  book: <FaBook />,
  wifi: <FaWifi />,
  work: <FaBriefcase />,
  tag: <FaBookmark />,
  arrowUp: <FaCaretUp />,
  arrowDown: <FaCaretDown />,
  question: <FaQuestion />,
  search: <MdSearch />,
  done: <MdCheckCircleOutline />,
  error: <MdErrorOutline />,
  warning: <MdWarningAmber />,
}

export default icons
