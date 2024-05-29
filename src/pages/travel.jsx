import PhotoCard from "@/components/photo-card";

const content = [
	{
		img: "/images/travel-001.jpg",
		category: "Travel",
		title: "Ballonsafari",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil dolorem ipsum, corporis nam, ipsam tempora earum illum, esse quaerat consequatur! Commodi sit ullam incidunt amet culpa eveniet dolores suscipit."
	},{
		img: "/images/travel-002.jpg",
		category: "Travel",
		title: "Fjeldet",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil dolorem ipsum, corporis nam, ipsam tempora earum illum, esse quaerat consequatur! Commodi sit ullam incidunt amet culpa eveniet dolores suscipit."
	},{
		img: "/images/travel-003.jpg",
		category: "Travel",
		title: "Båd og Bali",
		body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nihil dolorem ipsum, corporis nam, ipsam tempora earum illum, esse quaerat consequatur! Commodi sit ullam incidunt amet culpa eveniet dolores suscipit."
	}
]

export default function TravelPage() {
  return (
    <section className="flex gap-8 w-[60%] p-4 m-auto">
      {content.map(function(card) { return <PhotoCard img={card.img} category={card.category} title={card.title} body={card.body} /> })}
    </section>
  )
}
