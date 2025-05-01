export interface Location {
    division: string
    district: string
    upazila: string
  }
  
  // utils.ts
  import rawData from "./address.json"
  
  const data: Location[] = rawData as Location[]

  // utils.ts (continued)

/** Deduplicate an array */
function unique(arr: string[]): string[] {
    return Array.from(new Set(arr))
  }
  
  /** All divisions */
  export function getAllDivisions(): string[] {
    return unique(data.map(item => item.division))
  }
  
  /** All districts */
  export function getAllDistricts(): string[] {
    return unique(data.map(item => item.district))
  }
  
  /** All upazilas */
  export function getAllUpazilas(): string[] {
    return unique(data.map(item => item.upazila))
  }
  
  /** Districts by division */
  export function getDistrictsByDivision(divisionName: string): string[] {
    return unique(
      data
        .filter(item => item.division === divisionName)
        .map(item => item.district)
    )
  }
  
  /** Upazilas by district */
  export function getUpazilasByDistrict(districtName: string): string[] {
    return unique(
      data
        .filter(item => item.district === districtName)
        .map(item => item.upazila)
    )
  }
  
  