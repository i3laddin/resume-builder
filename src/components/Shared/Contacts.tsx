import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

interface ContactProps {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  address?: string;
  postalCode?: string;
  drivingLicense?: string;
  nationality?: string;
  placeOfBirth?: string;
  dateOfBirth?: string;
}

const ContactList: React.FC<ContactProps> = ({
  email,
  phone,
  linkedin,
  github,
  address,
  postalCode,
  drivingLicense,
  nationality,
  placeOfBirth,
  dateOfBirth,
}) => {

  return (
    <div>
      <ul className="space-y-2">
        {email && (
          <li className="flex items-center">
            <Mail className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-700">{email}</span>
          </li>
        )}
        {phone && (
          <li className="flex items-center">
            <Phone className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-700">{phone}</span>
          </li>
        )}
        {linkedin && (
          <li className="flex items-center">
            <Linkedin className="w-5 h-5 text-gray-600 mr-2" />
            <p className="text-gray-700">
              {linkedin}
            </p>
          </li>
        )}
        {github && (
          <li className="flex items-center">
            <Github className="w-5 h-5 text-gray-600 mr-2" />
            <p className="text-gray-700">
              {github}
            </p>
          </li>
        )}
        {address && (
          <li className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-600 mr-2" />
            <div>
              <p className="text-gray-700">{address}</p>
              {postalCode && <p className="text-gray-700">{postalCode}</p>}
            </div>
          </li>
        )}
        {drivingLicense && (
          <li className="flex items-center justify-center">
            <p className="text-gray-700">{drivingLicense}</p>
          </li>
        )}
        {nationality && (
          <li className="flex items-center justify-center">
            <p className="text-gray-700">{nationality}</p>
          </li>
        )}
        {placeOfBirth && (
          <li className="flex items-center justify-center">
            <p className="text-gray-700">{placeOfBirth}</p>
          </li>
        )}
        {dateOfBirth && (
          <li className="flex items-center justify-center">
            <p className="text-gray-700">BirthDate: {dateOfBirth}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
