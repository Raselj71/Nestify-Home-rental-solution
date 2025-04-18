import { url } from "inspector";
import { Building2, Home, House, Plus, Share2, User } from "lucide-react";

export const categories = [
    { name: 'Family', icon: <Home className="h-6 w-6 text-gray-600" />, url: '/family' },
    { name: 'Room', icon: <House className="h-6 w-6 text-gray-600" />, url: '/room' },    
    { name: 'Bachelor', icon: <User className="h-6 w-6 text-gray-600"  /> ,url},
    { name: 'Office', icon: <Building2 className="h-6 w-6 text-gray-600" /> ,url: '/office' },
    { name: 'Sublet', icon: <Plus className="h-6 w-6 text-gray-600" /> , url: '/sublet' },
    { name: 'Hostel', icon: <Share2 className="h-6 w-6 text-gray-600" />  , url: '/hostel' },
    
  ]