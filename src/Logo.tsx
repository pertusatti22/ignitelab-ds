import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> { }

export function Logo(props: LogoProps) {
	return (
		<svg
			width={97}
			height={120}
			viewBox="0 0 97 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_6_71)">
				<path
					d="M18.479 78.474L0 59.995 60 0h36.953m0 55.363H60L46.158 69.205l18.479 18.48"
					fill="#42A5F5"
					fillOpacity={0.8}
				/>
				<path d="M46.158 106.158L60 120h36.953L64.637 87.684" fill="#0D47A1" />
				<path
					d="M27.723 87.694l18.45-18.455 18.45 18.45-18.45 18.454-18.45-18.45z"
					fill="#42A5F5"
				/>
				<path
					d="M46.172 106.143l18.45-18.45 2.576 2.576-18.45 18.45-2.575-2.576z"
					fill="url(#paint0_linear_6_71)"
				/>
				<path
					d="M46.158 106.158l27.417-9.472-8.938-9.007"
					fill="url(#paint1_linear_6_71)"
				/>
			</g>
			<defs>
				<linearGradient
					id="paint0_linear_6_71"
					x1={55.4008}
					y1={96.9152}
					x2={57.9764}
					y2={99.4907}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.2} stopOpacity={0.15} />
					<stop offset={0.85} stopColor="#616161" stopOpacity={0.01} />
				</linearGradient>
				<linearGradient
					id="paint1_linear_6_71"
					x1={46.1645}
					y1={96.9191}
					x2={73.5814}
					y2={96.9191}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.2} stopOpacity={0.55} />
					<stop offset={0.85} stopColor="#616161" stopOpacity={0.01} />
				</linearGradient>
				<clipPath id="clip0_6_71">
					<path fill="#fff" d="M0 0H96.9526V120H0z" />
				</clipPath>
			</defs>
		</svg>
	)
}

