"use client"

import { useState } from "react"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"



import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@radix-ui/themes"


export default function PropertyForm() {
  const [availableDate, setAvailableDate] = useState<Date | undefined>()

  return (
    <form className="max-w-3xl mx-auto space-y-6 p-6 border rounded-2xl shadow-sm">
      <h2 className="text-2xl font-semibold">Add New Property</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Luxurious Apartment in Gulshan" required />
        </div>
        <div>
          <Label htmlFor="price">Price (৳)</Label>
          <Input id="price" type="number" placeholder="20000" required />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="summary">Summary</Label>
          <Textarea id="summary" placeholder="Write a short description..." rows={3} />
        </div>
      </div>

      {/* Address Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>Division</Label>
          <Input placeholder="Dhaka" required />
        </div>
        <div>
          <Label>District</Label>
          <Input placeholder="Dhaka" required />
        </div>
        <div>
          <Label>Upazila</Label>
          <Input placeholder="Gulshan" required />
        </div>
        <div className="md:col-span-3">
          <Label>Google Map Embed Link</Label>
          <Input placeholder="https://maps.google.com/..." />
        </div>
      </div>

      {/* Basic Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label>Bedrooms</Label>
          <Input type="number" placeholder="2" required />
        </div>
        <div>
          <Label>Bathrooms</Label>
          <Input type="number" placeholder="1" required />
        </div>
        <div>
          <Label>Area (sqft)</Label>
          <Input type="number" placeholder="1200" />
        </div>
        <div>
          <Label>Floor</Label>
          <Input type="number" placeholder="5" />
        </div>
        <div>
          <Label>Category</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FAMILY">Family</SelectItem>
              <SelectItem value="BACHELOR">Bachelor</SelectItem>
              <SelectItem value="OFFICE">Office</SelectItem>
              <SelectItem value="SUBLET">Sublet</SelectItem>
              <SelectItem value="HOSTEL">Hostel</SelectItem>
              <SelectItem value="SHOP">Shop</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Gender</Label>
          <Select required>
            <SelectTrigger>
              <SelectValue placeholder="Select gender preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MALE">Male</SelectItem>
              <SelectItem value="FEMALE">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Available From</Label>
          <Calendar
            mode="single"
            selected={availableDate}
            onSelect={setAvailableDate}
            className={cn("border rounded-md")}
          />
        </div>
      </div>

      {/* Images */}
      <div>
        <Label>Images (URLs)</Label>
        <Textarea placeholder="Paste image URLs separated by commas..." />
      </div>

      {/* Submit */}
      <div className="pt-4">
        <Button type="submit">Add Property</Button>
      </div>
    </form>
  )
}
