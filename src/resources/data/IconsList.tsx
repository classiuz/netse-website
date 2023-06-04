import { BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsTelephoneFill, BsWhatsapp } from 'react-icons/bs'

import { FaBook, FaBookmark, FaBriefcase, FaWifi, FaCaretDown, FaCaretUp, FaQuestion } from 'react-icons/fa'

import {
  MdArrowDownward,
  MdArrowUpward,
  MdCheckCircleOutline,
  MdClose,
  MdErrorOutline,
  MdMenu,
  MdSearch,
  MdWarningAmber,
  MdInfoOutline,
} from 'react-icons/md'

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
  arrowUp: <MdArrowUpward />,
  arrowDown: <MdArrowDownward />,
  caretUp: <FaCaretUp />,
  caretDown: <FaCaretDown />,
  question: <FaQuestion />,
  search: <MdSearch />,
  done: <MdCheckCircleOutline />,
  error: <MdErrorOutline />,
  info: <MdInfoOutline />,
  warning: <MdWarningAmber />,
}

export default icons
