import { Heart } from "lucide-react"
import { HyderabadMOU } from "./HyderabadMOU"

export function TalpurMOU() {
  return (
    <HyderabadMOU
      title="Talpur Foundation MOU"
      description="Talpur Foundation is a community-based NGO working across Sindh on education, heritage preservation, scholarships, environmental drives, and disaster relief. Their projects include supporting schools, running plantation drives, and offering scholarships to students."
      icon={Heart}
      category="NGO"
      signedBy="Ghulam Mustafa"
      programFee="150 USD total program cost"
    />
  )
}