import Image from "next/image"

export default function PhotoCard(props) {
	return (
		<article className="bg-white rounded-lg">
			<Image src={props.img} height={200} width={300} alt="" className="rounded-t-lg w-full h-auto" />
			<div className="p-4">
				<p className="uppercase font-semibold text-blue-900">{props.category}</p>
				<h2 className="capitalize font-semibold text-black text-3xl">{props.title}</h2>
				<p className="text-gray-700">{props.body}</p>
			</div>
		</article>
	)
}
