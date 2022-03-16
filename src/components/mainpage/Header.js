import React from "react";
import "../scss/Header.scss";
//import MediaQuery from "react-responsive/dist/Component";
import { useMediaQuery } from "react-responsive";

const Header = () => {
	const isDesktopOrLaptop = useMediaQuery({
		query: "(min-width: 1224px)",
	});

	//const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	//const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
	//   const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

	return (
		<nav>
			{isDesktopOrLaptop && (
				<div className="cont-socials">
					<a href="tel:5145753009">514-575-3009</a>
					<a href="https://www.facebook.com/paysagistelesportugais/">
						<img
							src="https://static.wixstatic.com/media/4057345bcf57474b96976284050c00df.png/v1/fill/w_27,h_27,al_c,usm_0.66_1.00_0.01,enc_auto/4057345bcf57474b96976284050c00df.png"
							alt=""
						/>
					</a>
				</div>
			)}
			{isDesktopOrLaptop && (
				<div className="cont-nav-droit">
					<div className="logo">
						<svg
							preserveAspectRatio="xMidYMid meet"
							data-bbox="14.55 53.06 490.992 139.12"
							viewBox="0 0 518.6 239.52"
							xmlns="http://www.w3.org/2000/svg"
							data-type="ugc"
							role="presentation"
							aria-hidden="true"
						>
							<g>
								<path
									fill="#998019"
									d="M98.23 58.83l6.89 24.54-3.89 1.05-9.17-14.98 6.17-10.61z"
								></path>
								<path
									d="M99.73 54.45l-.98 5.56c-.05.18-.12.49-.23.9-.04.18-.1.37-.15.58-.04.21-.09.44-.14.69-.05.25-.1.51-.16.79-.05.28-.09.57-.14.88-.04.31-.1.63-.14.96-.03.33-.07.68-.1 1.03-.02.18-.03.36-.05.54l-.03.55c-.01.37-.04.75-.05 1.14.01.77-.01 1.58.06 2.39.03.82.15 1.64.24 2.47.14.82.26 1.65.45 2.45.16.81.4 1.59.61 2.35.12.38.24.74.36 1.11l.18.54c.07.17.13.35.2.51.13.34.26.67.39.99.13.32.28.62.41.91.13.29.25.57.39.84.14.26.27.52.39.75.12.24.24.46.35.66.06.11.12.22.18.32l-.2.03c-.12.01-.23.03-.34.04-3.57.43-6.44-1.47-6.44-1.47-11.8-9.05 3.81-27.23 4.94-28.51"
									fill="#f4cc23"
								></path>
								<path
									d="M102.65 79.78c-.16-.28-.32-.57-.48-.87-.08-.15-.17-.3-.25-.46-.08-.16-.16-.32-.23-.48-.16-.32-.32-.65-.48-.99-.29-.68-.61-1.39-.87-2.13-.29-.73-.5-1.5-.74-2.26-.19-.77-.41-1.54-.54-2.32-.17-.77-.26-1.54-.37-2.29-.04-.37-.07-.74-.1-1.1-.02-.18-.03-.36-.05-.54-.01-.18-.01-.35-.02-.53-.01-.35-.03-.68-.04-1.01-.01-.33.01-.64.01-.95.01-.3 0-.6.02-.87.02-.28.04-.54.05-.79.02-.25.03-.48.05-.69.02-.21.05-.41.07-.59.09-.71.14-1.12.14-1.12s-.01.06-.04.16l.97-5.52c.04-.05.06-.07.06-.07s-1.29 2.95 7.03 12.92c1.16 1.39 2.07 2.71 2.78 3.95.45.79.75 1.61.92 2.44.64 3.24-.85 6.55-3.65 8.63-.54.4-1.12.75-1.74 1.05-.1-.13-.21-.27-.34-.44-.11-.14-.24-.31-.37-.48-.12-.17-.24-.35-.38-.54-.14-.19-.28-.4-.44-.62-.15-.22-.3-.47-.46-.72-.17-.24-.34-.5-.51-.77"
									fill="#e5c026"
								></path>
								<path
									fill="#0e3a1f"
									d="M26.46 66.03l49.64 91.71 11.28-4.27-15.97-75.73-44.95-11.71z"
								></path>
								<path
									d="M14.95 55.41l17.71 14.14c.63.42 1.68 1.13 3.1 2.07.6.41 1.28.84 1.99 1.35.7.52 1.45 1.09 2.26 1.7.81.61 1.67 1.26 2.58 1.94.89.7 1.79 1.49 2.74 2.29.94.81 1.96 1.63 2.96 2.53.98.93 1.99 1.88 3.02 2.87.52.49 1.05 1 1.58 1.51.5.53 1.02 1.07 1.53 1.62 1.02 1.1 2.11 2.21 3.16 3.37 2.01 2.41 4.18 4.84 6.12 7.55 2.07 2.61 3.87 5.48 5.77 8.3 1.72 2.94 3.55 5.84 5.04 8.88 1.63 2.97 2.94 6.07 4.3 9.04.63 1.51 1.2 3.02 1.78 4.49.29.74.57 1.47.85 2.19.25.73.49 1.46.73 2.18.48 1.44.94 2.85 1.39 4.21.43 1.37.76 2.73 1.12 4.01.35 1.3.71 2.52 1 3.73.27 1.23.52 2.4.76 3.49.24 1.1.46 2.13.66 3.08.11.54.19 1.04.27 1.52.23-.18.48-.34.72-.52.39-.31.79-.61 1.17-.9 12.26-9.4 16.21-23.87 16.21-23.87 12.97-63.33-83.65-72.22-90.52-72.77"
									fill="#009139"
								></path>
								<path
									d="M73.87 139.98c-.28-1.28-.58-2.61-.88-3.98-.15-.68-.31-1.38-.46-2.08-.19-.69-.38-1.39-.57-2.1-.39-1.41-.77-2.87-1.2-4.33-.97-2.87-1.88-5.9-3.1-8.85-1.09-3.01-2.5-5.92-3.82-8.89-1.49-2.86-2.9-5.8-4.57-8.52-1.55-2.8-3.34-5.37-5-7.93-.87-1.24-1.78-2.43-2.64-3.62-.43-.59-.86-1.18-1.29-1.76-.45-.56-.9-1.1-1.34-1.64-.89-1.08-1.75-2.14-2.59-3.15-.85-1-1.74-1.92-2.55-2.83-.83-.9-1.61-1.79-2.39-2.59-.8-.78-1.56-1.53-2.26-2.23-.72-.7-1.38-1.35-2-1.96-.63-.59-1.24-1.1-1.78-1.58-2.16-1.91-3.4-2.99-3.4-2.99s.19.13.55.37C26.95 64.9 19.48 59 14.94 55.41c-.24-.03-.39-.04-.39-.04s11.73 5.27 13.53 58.68c.25 7.43 1.05 13.96 2.24 19.69.76 3.66 2.06 6.97 3.77 9.92 6.74 11.57 20.05 17.37 33.99 15.8 2.67-.3 5.35-.86 8.02-1.71-.04-.65-.1-1.4-.16-2.29-.06-.74-.1-1.6-.18-2.46-.1-.84-.2-1.74-.32-2.71-.11-.97-.23-2-.36-3.09-.15-1.09-.37-2.25-.56-3.46-.21-1.2-.39-2.47-.65-3.76"
									fill="#047734"
								></path>
								<path
									fill="#0e3a1f"
									d="M132.3 148.3l10.97-76.91-32.18 25.63 10.52 49.57 10.69 1.71z"
								></path>
								<path
									d="M20.89 57.82L34.5 68.61l3.01 2.01c.44.29.91.6 1.39.95l4.87 3.67c.6.47 1.18.96 1.77 1.47l1.04.87c.37.32.73.62 1.09.92.64.53 1.29 1.08 1.93 1.66l6.24 6.09c.41.45.83.88 1.25 1.33.64.68 1.29 1.37 1.94 2.08.52.62 1.01 1.19 1.49 1.77 1.59 1.87 3.23 3.81 4.75 5.93 1.55 1.95 3.01 4.14 4.41 6.26l1.38 2.07 1.28 2.16c1.33 2.23 2.7 4.54 3.88 6.93 1.26 2.29 2.35 4.71 3.4 7.05l.92 2.03c.46 1.11.87 2.16 1.28 3.21l1.39 3.56 2.15 6.47c.29.94.54 1.85.78 2.74l.71 2.61c.24.86.47 1.7.67 2.53l1.14 5.25c6.96-5.56 11.04-12.85 13.14-17.6-6.26-11.99-5.39-23.23-.75-33.26a43.687 43.687 0 00-5.79-9.38c-18.51-23-58.51-30.18-74.37-32.17z"
									fill="none"
								></path>
								<path
									d="M131.01 91.47c.55-1.16 1.14-2.29 1.68-3.4.28-.55.55-1.1.82-1.64.3-.53.59-1.05.88-1.57.58-1.02 1.14-2.02 1.69-2.99.56-.95 1.17-1.85 1.71-2.72.56-.86 1.07-1.7 1.6-2.48.54-.76 1.06-1.49 1.54-2.17.48-.68.94-1.31 1.35-1.9.43-.58.86-1.09 1.23-1.57.88-1.1 1.52-1.92 1.91-2.41l10.44-15.52c-3.49 1.6-37.98 17.92-51.99 42.04 5.24 9.77 6.64 20.9 4.11 33.24-.09.32-.95 3.39-2.99 7.54 2.73 3.15 7.76 7.87 14.89 10.14.35.11.71.23 1.07.35.22.07.44.12.65.19-.04-.38-.08-.77-.11-1.21-.04-.77-.09-1.6-.15-2.49-.05-.88-.1-1.83-.16-2.82-.03-.98-.02-1.99-.03-3.06 0-1.06-.03-2.17.01-3.31.05-1.14.11-2.32.17-3.53.03-.6.06-1.22.1-1.83l.18-1.87c.13-1.26.24-2.55.4-3.85.41-2.59.74-5.28 1.36-7.95.49-2.69 1.27-5.37 1.95-8.04.85-2.64 1.61-5.29 2.63-7.81.91-2.58 2.05-5 3.06-7.36z"
									fill="#047734"
								></path>
								<path
									d="M155.49 53.06s-.1.05-.29.13c-2.66 3.96-7.04 10.49-10.35 15.41.22-.28.34-.43.34-.43l-1.92 3.21c-.3.51-.65 1.07-1 1.69-.33.63-.69 1.31-1.08 2.04-.38.73-.79 1.5-1.22 2.32-.41.82-.8 1.71-1.23 2.63-.42.92-.88 1.86-1.3 2.86-.4 1.01-.82 2.05-1.25 3.12-.21.53-.43 1.07-.65 1.62-.19.56-.38 1.12-.58 1.7-.39 1.14-.8 2.3-1.18 3.49-.67 2.41-1.45 4.87-1.98 7.44-.65 2.53-1.03 5.17-1.5 7.78-.31 2.64-.71 5.25-.83 7.86-.24 2.59-.22 5.17-.28 7.64.01 1.24.07 2.46.1 3.65l.06 1.77c.05.58.09 1.16.14 1.73.09 1.13.18 2.23.27 3.3.11 1.06.27 2.09.4 3.07.14.98.25 1.93.39 2.81.16.87.32 1.7.46 2.48.14.77.28 1.5.4 2.17.14.68.32 1.36.45 1.94.16.7.3 1.29.43 1.81 2.27-.05 4.49-.33 6.63-.8 11.19-2.48 20.12-10.49 22.57-21.19.62-2.72.84-5.62.55-8.64-.45-4.74-1.39-9.98-2.98-15.78-11.4-41.65-3.57-48.83-3.57-48.83z"
									fill="#009139"
								></path>
								<path
									d="M502.54 128.73c-.41-2.03-1.36-3.07-2.11-4.9-.51-1.24-.43-2.06-1.46-2.92-1.72-1.42-4.37-.74-6.26-.58-.92.08-.85 1.75.08 1.67.96-.08 2.02-.37 2.98-.26 2.24.25 3.03 2.2 4.07 4.34 1.83 3.76 1.76 8.05 2.07 12.31.62 8.29-1.47 15.8-5.11 22.77-7.99 15.29-23.36 20.89-37.75 23.93-8.14 1.72-16.48 1.57-24.74 2.11-8.04.52-16.06 1.35-24.12 1.46-7.63.1-15.44-.05-23.07-.59-7.97-.57-15.95-.82-23.9-1.73-8-.92-16.03-.96-24.04-1.89-7.3-.85-14.59-2.02-21.9-2.78-15.87-1.65-31.7-3.64-47.56-5.4-15.8-1.75-31.69-3.16-47.52-4.09-7.8-.46-15.59-.75-23.39-.88-7.63-.13-15.24-.94-22.87-1.15-17.79-.48-35.61.93-53.34 2.1-8.57.56-17.05 1.61-25.49 3.31-4.11.83-8.18 1.8-12.18 3.13-3.32 1.1-6.11 1.54-9.06 3.75-.77.58.02 1.99.79 1.41 2.67-2 5.75-2.48 8.72-3.57 3.74-1.37 7.65-2.2 11.52-3 8.77-1.8 17.57-2.84 26.48-3.42 16.84-1.08 33.74-2.4 50.64-2.1 8.07.14 16.12 1.03 24.19 1.18 8.49.16 16.97.47 25.46.98 17.19 1.03 34.45 2.6 51.59 4.63 16.71 1.98 33.5 3.46 50.18 5.76 7.73 1.07 15.46 2.15 23.23 2.61 8.11.48 16.21 1.54 24.31 1.92 16.47.78 32.92 2.03 49.37.88 8.64-.6 17.3-1.01 25.94-1.59 7.41-.5 15.64-1.45 22.6-4.41 6.87-2.92 13.37-5.32 18.88-11.04 5.14-5.33 10.96-12.44 12.29-20.62.61-3.73 1.62-6.97 1.49-10.85-.16-3.95-.22-8.58-1.01-12.48z"
									fill="#fffdf1"
								></path>
								<path
									d="M408.06 192.18c-9.11 0-18.21-.47-27.1-.94-2.7-.14-5.4-.28-8.1-.41-4.43-.21-8.91-.62-13.23-1.02-3.64-.34-7.41-.68-11.11-.9-7.69-.46-15.44-1.53-22.94-2.57l-.45-.06c-10.34-1.43-20.9-2.56-31.13-3.65-6.23-.67-12.68-1.36-19.01-2.11-17.47-2.07-34.79-3.63-51.47-4.62-8.14-.49-16.44-.81-25.38-.97-4.06-.08-8.16-.34-12.12-.59-3.96-.25-8.06-.52-12.07-.59-14.67-.26-29.6.72-44.04 1.68l-6.43.42c-9.56.61-18.13 1.72-26.2 3.38-4.07.84-7.73 1.64-11.23 2.92-.88.32-1.75.59-2.6.85-2.04.62-3.96 1.21-5.6 2.44-.76.57-1.72.7-2.57.34-.93-.38-1.59-1.27-1.73-2.31-.13-1.01.27-1.98 1.08-2.58 2.57-1.93 4.97-2.64 7.5-3.39.69-.21 1.4-.42 2.14-.66 3.62-1.2 7.56-2.22 12.42-3.19 8.2-1.65 16.62-2.74 25.75-3.34l6.03-.4c15.55-1.05 31.63-2.13 47.5-1.7 3.63.1 7.3.33 10.85.56 3.94.25 8.01.52 11.99.59 7.89.14 15.79.44 23.48.89 15.11.88 30.69 2.22 47.63 4.1 6.5.72 12.99 1.48 19.48 2.24 9.2 1.07 18.71 2.19 28.07 3.16 4.12.43 8.29.99 12.32 1.54 3.15.43 6.41.87 9.61 1.24 3.96.46 8.03.7 11.96.94 3.95.24 8.04.48 12.08.95 5.33.61 10.79.93 16.08 1.24 2.58.15 5.16.3 7.74.48 6.93.49 14.63.69 22.9.58 5.59-.07 11.29-.51 16.8-.93 2.41-.18 4.81-.37 7.22-.52 2.23-.14 4.5-.24 6.69-.33 5.88-.25 11.96-.51 17.76-1.73 12.78-2.7 28.47-7.74 36.39-22.9 3.83-7.34 5.43-14.44 4.89-21.73-.05-.72-.1-1.45-.14-2.17-.2-3.42-.39-6.65-1.74-9.43l-.19-.4c-.95-1.97-1.39-2.72-2.3-2.82-.38-.04-.94.04-1.49.12-.37.06-.74.11-1.09.14-.93.09-1.84-.32-2.38-1.09-.6-.85-.7-2.01-.25-2.97.41-.88 1.24-1.45 2.2-1.54.31-.03.63-.07.97-.11 1.97-.25 4.66-.59 6.76 1.14 1.19.98 1.5 2.03 1.75 2.87.08.25.15.52.28.82.24.58.5 1.08.79 1.61.54 1.02 1.11 2.08 1.43 3.64.74 3.63.87 7.81.98 11.5l.04 1.33c.1 3.01-.43 5.66-.94 8.22-.2.98-.4 1.98-.56 3.01-1.47 9.03-8.02 16.69-12.82 21.67-5.31 5.5-11.34 8.04-17.72 10.72l-1.81.77c-7.4 3.15-15.91 4.07-23.25 4.57-4.07.27-8.14.51-12.21.74-4.5.26-9.16.53-13.73.84-4.81.28-9.62.42-14.43.42z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M173.99 149.16v-25.57h8.53v17.85h11.41v7.72h-19.94z"
								></path>
								<path
									d="M181.52 124.59v17.85h11.41v5.72h-17.95v-23.57h6.54m2-2h-10.53v27.57h21.95v-9.72h-11.41v-17.85h-.01z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M196.64 149.16v-25.57h20.96v7.56h-12.49v1.57h11.31v7.15h-11.31v1.74h12.66v7.55h-21.13z"
								></path>
								<path
									d="M216.6 124.59v5.56h-12.49v3.57h11.31v5.15h-11.31v3.74h12.66v5.56h-19.12V124.6h18.95m2-2.01h-22.96v27.57h23.12v-9.56h-1.35v-8.46h1.18v-9.55h.01z"
									fill="#ffffff"
								></path>
								<path
									d="M231.28 149.57c-4.56 0-8.71-1.48-11.71-4.16l-.72-.65 4.88-5.83.76.61c2.17 1.73 4.54 2.61 7.02 2.61.17 0 1.69-.02 1.69-.62 0-.43-1.05-.85-3.2-1.35-4.89-1.12-9.66-2.68-9.66-8.38 0-5.18 4.07-8.61 10.12-8.61 4.14 0 7.51 1.1 10.32 3.35l.73.59-4.39 6.19-.82-.57c-1.96-1.38-4.1-2.14-6.02-2.14-.79 0-1.36.22-1.36.52 0 .34.25.69 3.3 1.38 4.96 1.08 9.57 2.83 9.57 8.32.02 5.33-4.12 8.74-10.51 8.74z"
									fill="#253786"
								></path>
								<path
									d="M230.47 124.19c4.01 0 7.14 1.08 9.7 3.13l-3.27 4.61c-2.15-1.52-4.51-2.32-6.6-2.32-1.58 0-2.36.67-2.36 1.52v.07c0 1.08.81 1.55 4.07 2.29 5.42 1.18 8.79 2.93 8.79 7.34v.07c0 4.81-3.8 7.68-9.53 7.68-4.17 0-8.15-1.31-11.04-3.91l3.64-4.34c2.32 1.85 4.92 2.83 7.64 2.83 1.75 0 2.69-.61 2.69-1.62v-.07c0-.98-.77-1.52-3.97-2.26-5.02-1.15-8.89-2.56-8.89-7.41v-.07c0-4.37 3.47-7.54 9.13-7.54m0-2c-6.55 0-11.12 3.92-11.12 9.54v.07c0 3.3 1.46 5.37 3.41 6.73l-.42.5-3.64 4.34-1.24 1.48 1.44 1.29c3.18 2.85 7.58 4.42 12.38 4.42 7 0 11.53-3.8 11.53-9.68v-.07c0-3.74-1.91-5.95-4.54-7.35l.27-.38 3.27-4.61 1.09-1.54-1.47-1.18c-3.01-2.39-6.59-3.56-10.96-3.56z"
									fill="#ffffff"
								></path>
								<path
									d="M256.13 149.16v-25.57h11.1c6.66 0 10.8 3.56 10.8 9.28 0 5.83-4.37 9.55-11.13 9.55h-2.23v6.73h-8.54zm10.63-13.85c.82 0 2.74-.2 2.74-2.06 0-.59 0-2.17-2.77-2.17h-2.06v4.23h2.09z"
									fill="#253786"
								></path>
								<path
									d="M267.23 124.59c5.96 0 9.8 3.06 9.8 8.28v.07c0 5.56-4.28 8.49-10.13 8.49h-3.23v6.73h-6.53v-23.57h10.09m-3.57 11.72h3.1c2.32 0 3.74-1.21 3.74-3.06v-.07c0-2.02-1.41-3.1-3.77-3.1h-3.06v6.23m3.56-13.72h-12.1v27.57h10.53v-6.73h1.23c7.37 0 12.13-4.12 12.13-10.49v-.07c.01-6.24-4.62-10.28-11.79-10.28zm-1.57 9.49h1.06c1.77 0 1.77.66 1.77 1.1v.07c0 .71-.58 1.06-1.74 1.06h-1.1v-2.23h.01z"
									fill="#ffffff"
								></path>
								<path
									d="M293.56 149.64c-7.66 0-13.66-5.79-13.66-13.19 0-7.5 6.03-13.32 13.73-13.32 7.66 0 13.66 5.79 13.66 13.19-.01 7.49-6.04 13.32-13.73 13.32zm0-18.62c-2.83 0-4.96 2.28-4.96 5.3 0 3.13 2.16 5.43 5.03 5.43 2.85 0 4.99-2.28 4.99-5.3 0-3.13-2.18-5.43-5.06-5.43z"
									fill="#253786"
								></path>
								<path
									d="M293.62 124.12c7.27 0 12.66 5.42 12.66 12.19v.07c0 6.77-5.45 12.26-12.73 12.26-7.27 0-12.66-5.42-12.66-12.19v-.07c.01-6.77 5.46-12.26 12.73-12.26m0 18.62c3.6 0 5.99-2.9 5.99-6.3v-.07c0-3.4-2.46-6.36-6.06-6.36-3.57 0-5.96 2.9-5.96 6.3v.07c.01 3.4 2.47 6.36 6.03 6.36m0-20.62c-8.26 0-14.73 6.26-14.73 14.26v.07c0 7.96 6.44 14.19 14.66 14.19 8.26 0 14.73-6.26 14.73-14.26v-.07c0-7.95-6.43-14.19-14.66-14.19zm0 18.62c-2.62 0-4.03-2.25-4.03-4.36v-.07c0-2.13 1.36-4.3 3.96-4.3 2.64 0 4.06 2.25 4.06 4.36v.07c.01 2.14-1.36 4.3-3.99 4.3z"
									fill="#ffffff"
								></path>
								<path
									d="M325.21 149.16l-4.75-7.14h-1.33v7.14h-8.53v-25.57h12.14c3.71 0 6.53.96 8.39 2.86 1.57 1.53 2.37 3.62 2.37 6.19 0 3.42-1.54 6.09-4.37 7.69l6.04 8.83h-9.96zm-2.77-14.25c1.14 0 2.5-.31 2.5-1.79 0-.51 0-1.86-2.54-1.86h-3.28v3.66h3.32z"
									fill="#253786"
								></path>
								<path
									d="M322.74 124.59c3.6 0 6.09.94 7.68 2.56 1.38 1.35 2.09 3.17 2.09 5.49v.07c0 3.6-1.92 5.99-4.85 7.24l5.62 8.22h-7.54l-4.75-7.14h-2.86v7.14h-6.53V124.6h11.14m-4.61 11.31h4.31c2.22 0 3.5-1.08 3.5-2.79v-.07c0-1.85-1.35-2.79-3.53-2.79h-4.28v5.65m4.61-13.32H309.6v27.57h10.53v-6.82l3.94 5.93.59.89h12.4l-2.14-3.13-4.39-6.41c2.57-1.81 3.96-4.55 3.96-7.92v-.07c0-2.85-.91-5.18-2.69-6.92-2-2.05-5.07-3.12-9.06-3.12zm-2.61 9.66h2.28c1.53 0 1.53.5 1.53.79v.07c0 .22 0 .79-1.5.79h-2.31v-1.65z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M342.48 149.16v-17.84h-7.07v-7.73h22.68v7.73h-7.08v17.84h-8.53z"
								></path>
								<path
									d="M357.09 124.59v5.72h-7.07v17.85h-6.53v-17.85h-7.07v-5.72h20.67m2-2h-24.67v9.72h7.07v17.85h10.53v-17.85h7.07v-9.72z"
									fill="#ffffff"
								></path>
								<path
									d="M372.47 149.6c-7.68 0-11.91-4.18-11.91-11.77V123.6h8.63v14.1c0 2.67 1.13 4.02 3.34 4.02s3.34-1.29 3.34-3.85V123.6h8.63v14.06c.01 7.7-4.27 11.94-12.03 11.94z"
									fill="#253786"
								></path>
								<path
									d="M383.51 124.59v13.06c0 7.61-4.34 10.94-11.04 10.94-6.7 0-10.91-3.4-10.91-10.77v-13.23h6.63v13.1c0 3.4 1.72 5.02 4.34 5.02 2.63 0 4.34-1.55 4.34-4.85v-13.27h6.64m2-2h-10.63v15.27c0 2.5-1.13 2.85-2.34 2.85-.76 0-2.34 0-2.34-3.02v-15.1h-10.63v15.23c0 8.12 4.71 12.77 12.91 12.77 8.29 0 13.04-4.72 13.04-12.94v-15.06h-.01z"
									fill="#ffffff"
								></path>
								<path
									d="M401.32 149.64c-8.01 0-13.83-5.55-13.83-13.19 0-7.62 5.89-13.32 13.69-13.32 4.07 0 7.31 1.17 10.22 3.68l.74.64-4.95 5.95h5.36v12.08l-.36.3c-2.14 1.75-5.76 3.86-10.87 3.86zm-.1-18.69c-2.82 0-5.03 2.4-5.03 5.46 0 3.33 2.22 5.6 5.4 5.6 1.1 0 2.02-.18 2.77-.55v-1.28h-4.65v-6.78h7.1l-.54-.46c-1.69-1.42-3.15-1.99-5.05-1.99z"
									fill="#253786"
								></path>
								<path
									d="M401.19 124.12c4.14 0 7.07 1.28 9.56 3.43l-3.84 4.61c-1.68-1.41-3.37-2.22-5.69-2.22-3.4 0-6.03 2.86-6.03 6.46v.07c0 3.8 2.66 6.53 6.4 6.53 1.58 0 2.8-.34 3.77-.98v-2.86h-4.65v-4.78h10.84V145c-2.49 2.05-5.96 3.64-10.24 3.64-7.34 0-12.83-5.05-12.83-12.19v-.07c.01-6.87 5.4-12.26 12.71-12.26m0-2c-8.38 0-14.69 6.13-14.69 14.26v.07c0 8.22 6.24 14.19 14.83 14.19 5.41 0 9.24-2.23 11.51-4.09l.73-.6v-13.56h-4.23l2.96-3.56 1.25-1.51-1.48-1.28c-3.11-2.67-6.56-3.92-10.88-3.92zm-1.75 10.27c.53-.29 1.14-.45 1.78-.45.87 0 1.63.13 2.36.45h-4.14zm-.73 7.66c-.96-.8-1.52-2.04-1.52-3.57v-.07c0-1.45.59-2.71 1.52-3.52v7.16z"
									fill="#ffffff"
								></path>
								<path
									d="M433.91 149.16l-1.72-4.21h-7.74l-1.68 4.21h-9.05l10.88-25.74h7.62l10.88 25.74h-9.19zm-4.4-11.29l-1.17-2.98-1.18 2.98h2.35z"
									fill="#253786"
								></path>
								<path
									d="M431.55 124.43l10.03 23.74h-7l-1.72-4.21h-9.09l-1.68 4.21h-6.87l10.03-23.74h6.3m-5.86 14.44h5.29l-2.63-6.7-2.66 6.7m7.19-16.44h-8.96l-.52 1.22-10.03 23.74-1.17 2.78h11.24l.5-1.26 1.18-2.95h6.39l1.21 2.96.51 1.24h11.36l-1.17-2.78-10.03-23.74-.51-1.21z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M453.49 123.59v25.57h-8.57v-25.57h8.57z"
								></path>
								<path
									d="M452.49 124.59v23.57h-6.57v-23.57h6.57m2-2h-10.57v27.57h10.57v-27.57z"
									fill="#ffffff"
								></path>
								<path
									d="M467.98 149.57c-4.56 0-8.71-1.48-11.71-4.16l-.72-.65 4.88-5.83.76.61c2.17 1.73 4.54 2.61 7.02 2.61.17 0 1.69-.02 1.69-.62 0-.43-1.05-.85-3.2-1.35-4.89-1.12-9.66-2.68-9.66-8.38 0-5.18 4.07-8.61 10.13-8.61 4.14 0 7.51 1.1 10.32 3.35l.73.59-4.39 6.19-.82-.57c-1.96-1.38-4.1-2.14-6.02-2.14-.79 0-1.36.22-1.36.52 0 .34.25.69 3.3 1.38 4.96 1.08 9.57 2.83 9.57 8.32.01 5.33-4.13 8.74-10.52 8.74z"
									fill="#253786"
								></path>
								<path
									d="M467.17 124.19c4.01 0 7.14 1.08 9.7 3.13l-3.27 4.61c-2.16-1.52-4.51-2.32-6.6-2.32-1.58 0-2.36.67-2.36 1.52v.07c0 1.08.81 1.55 4.07 2.29 5.42 1.18 8.79 2.93 8.79 7.34v.07c0 4.81-3.8 7.68-9.53 7.68-4.18 0-8.15-1.31-11.04-3.91l3.64-4.34c2.32 1.85 4.92 2.83 7.64 2.83 1.75 0 2.69-.61 2.69-1.62v-.07c0-.98-.77-1.52-3.97-2.26-5.02-1.15-8.89-2.56-8.89-7.41v-.07c0-4.37 3.47-7.54 9.13-7.54m0-2c-6.55 0-11.12 3.92-11.12 9.54v.07c0 3.3 1.46 5.37 3.41 6.73l-.42.5-3.64 4.34-1.24 1.48 1.44 1.29c3.18 2.85 7.58 4.42 12.38 4.42 7 0 11.53-3.8 11.53-9.68v-.07c0-3.74-1.91-5.95-4.54-7.35l.27-.38 3.27-4.61 1.09-1.54-1.47-1.18c-3.01-2.39-6.59-3.56-10.96-3.56z"
									fill="#ffffff"
								></path>
								<path
									d="M174.79 109.56V88.51h9.16c5.42 0 8.92 3.02 8.92 7.69 0 4.83-3.61 7.91-9.19 7.91h-1.61v5.44h-7.28zm8.78-11.58c.61 0 2.02-.14 2.02-1.48 0-.47 0-1.56-2.05-1.56h-1.48v3.03h1.51z"
									fill="#253786"
								></path>
								<path
									d="M183.95 89.51c4.81 0 7.92 2.48 7.92 6.69v.05c0 4.49-3.46 6.85-8.19 6.85h-2.61v5.44h-5.28V89.51h8.16m-2.88 9.47h2.5c1.88 0 3.02-.98 3.02-2.48v-.05c0-1.63-1.14-2.5-3.05-2.5h-2.48v5.03m2.89-11.47h-10.16v23.04h9.28v-5.44h.61c6.19 0 10.19-3.48 10.19-8.85v-.05c-.01-5.28-3.9-8.7-9.92-8.7zm-.88 8.44h.48c1.05 0 1.05.27 1.05.5v.05c0 .12 0 .48-1.02.48h-.5v-1.03h-.01z"
									fill="#ffffff"
								></path>
								<path
									d="M220.07 109.56l-1.39-3.4h-6l-1.36 3.4h-7.74l8.95-21.18h6.41l8.95 21.18h-7.82zm-3.7-9.51l-.66-1.69-.67 1.69h1.33z"
									fill="#253786"
								></path>
								<path
									d="M218.3 89.38l8.11 19.18h-5.66l-1.39-3.4h-7.34l-1.36 3.4h-5.55l8.11-19.18h5.08m-4.73 11.67h4.27l-2.12-5.41-2.15 5.41m6.06-13.67h-7.75l-.52 1.22-8.11 19.18-1.17 2.78H212l.5-1.26.86-2.14h4.65l.88 2.16.51 1.24h10.02l-1.17-2.78-8.11-19.18-.51-1.22z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M244.2 109.56v-7.85l-8.02-13.2h8.38l3.33 5.91 3.36-5.91h8.27l-8.02 13.12v7.93h-7.3z"
								></path>
								<path
									d="M257.74 89.51l-7.24 11.83v7.21h-5.3v-7.13l-7.24-11.91h6.01l3.92 6.94 3.94-6.94h5.91m3.56-2h-10.63l-.58 1.01-2.2 3.87-2.18-3.86-.57-1.02h-10.73l1.85 3.04 6.95 11.44v8.57h9.3v-8.65l6.94-11.35 1.85-3.05z"
									fill="#ffffff"
								></path>
								<path
									d="M280.33 109.88c-3.73 0-7.13-1.21-9.59-3.41l-.72-.65 4.19-5 .76.61c1.72 1.37 3.59 2.07 5.55 2.07.77 0 1.18-.18 1.18-.31-.06-.16-.46-.44-2.44-.9-4.02-.92-7.96-2.21-7.96-6.96 0-4.3 3.36-7.15 8.37-7.15 3.39 0 6.15.9 8.46 2.75l.73.59-3.76 5.31-.82-.57c-1.55-1.09-3.24-1.69-4.76-1.69-.64 0-.88.18-.91.22l.01.13c.1.12.63.38 2.51.81 4.09.89 7.88 2.34 7.88 6.91.02 4.42-3.39 7.24-8.68 7.24z"
									fill="#253786"
								></path>
								<path
									d="M279.68 89.19c3.24 0 5.77.87 7.83 2.53l-2.64 3.73c-1.74-1.22-3.65-1.88-5.33-1.88-1.28 0-1.9.54-1.9 1.22v.05c0 .87.65 1.25 3.29 1.85 4.38.95 7.1 2.37 7.1 5.93v.05c0 3.89-3.07 6.2-7.7 6.2-3.37 0-6.58-1.06-8.92-3.16l2.94-3.51c1.88 1.5 3.97 2.28 6.18 2.28 1.41 0 2.18-.49 2.18-1.31v-.05c0-.79-.63-1.22-3.21-1.82-4.05-.93-7.18-2.07-7.18-5.98v-.05c-.01-3.52 2.79-6.08 7.36-6.08m0-2c-5.52 0-9.37 3.33-9.37 8.09v.05c0 2.65 1.08 4.36 2.58 5.51l-.07.08-2.94 3.51-1.24 1.48 1.44 1.29c2.64 2.36 6.28 3.67 10.26 3.67 5.8 0 9.7-3.3 9.7-8.2v-.05c0-3.07-1.59-4.92-3.5-6.06l2.61-3.69 1.09-1.54-1.47-1.18c-2.49-1.99-5.46-2.96-9.09-2.96z"
									fill="#ffffff"
								></path>
								<path
									d="M318.06 109.56l-1.39-3.4h-6l-1.36 3.4h-7.73l8.95-21.18h6.41l8.95 21.18h-7.83zm-3.7-9.51l-.66-1.69-.67 1.69h1.33z"
									fill="#253786"
								></path>
								<path
									d="M316.29 89.38l8.11 19.18h-5.66l-1.39-3.4h-7.34l-1.36 3.4h-5.55l8.11-19.18h5.08m-4.73 11.67h4.27l-2.12-5.41-2.15 5.41m6.05-13.67h-7.75l-.52 1.22-8.11 19.18-1.17 2.78H310l.5-1.26.86-2.14h4.65l.88 2.16.51 1.24h10.02l-1.17-2.78-8.11-19.18-.53-1.22z"
									fill="#ffffff"
								></path>
								<path
									d="M349.17 109.94c-6.58 0-11.36-4.56-11.36-10.85 0-6.27 4.84-10.96 11.25-10.96 3.34 0 6 .96 8.38 3.02l.74.64-3.86 4.64h4.12v10.04l-.36.3c-1.76 1.45-4.73 3.17-8.91 3.17zm-.08-15.1c-2.17 0-3.87 1.85-3.87 4.22 0 2.57 1.71 4.33 4.17 4.33.81 0 1.49-.12 2.05-.38v-.72h-3.75v-5.86h5.4l-.04-.03c-1.33-1.11-2.47-1.56-3.96-1.56z"
									fill="#253786"
								></path>
								<path
									d="M349.06 89.13c3.35 0 5.71 1.03 7.73 2.77l-3.1 3.73c-1.36-1.14-2.72-1.8-4.6-1.8-2.75 0-4.87 2.31-4.87 5.22v.05c0 3.07 2.15 5.28 5.17 5.28 1.28 0 2.26-.27 3.05-.79v-2.31h-3.75v-3.86h8.76V106c-2.01 1.66-4.81 2.94-8.27 2.94-5.93 0-10.36-4.08-10.36-9.85v-.05c-.02-5.55 4.34-9.91 10.24-9.91m0-2c-6.99 0-12.26 5.12-12.26 11.9v.05c0 6.75 5.32 11.85 12.36 11.85 4.48 0 7.66-1.85 9.54-3.39l.73-.6V95.43h-2.98l1.87-2.24 1.26-1.51-1.48-1.28c-2.58-2.23-5.45-3.27-9.04-3.27zm-2.38 13.82c-.3-.51-.46-1.13-.46-1.83v-.05c0-.66.17-1.27.46-1.78v3.66z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M381.22 88.51v21.04h-7.3V88.51h7.3z"
								></path>
								<path
									d="M380.23 89.51v19.04h-5.3V89.51h5.3m2-2h-9.3v23.04h9.3V87.51z"
									fill="#ffffff"
								></path>
								<path
									d="M405.63 109.88c-3.73 0-7.13-1.21-9.59-3.41l-.72-.65 4.19-5 .76.61c1.72 1.37 3.59 2.07 5.55 2.07.77 0 1.18-.18 1.18-.31-.06-.16-.46-.44-2.44-.9-4.02-.92-7.96-2.21-7.96-6.96 0-4.3 3.36-7.15 8.37-7.15 3.39 0 6.16.9 8.46 2.75l.73.59-3.76 5.31-.82-.57c-1.55-1.09-3.24-1.69-4.76-1.69-.64 0-.88.18-.9.22l.01.13c.1.12.63.38 2.51.8 4.09.89 7.88 2.34 7.88 6.91.01 4.43-3.41 7.25-8.69 7.25z"
									fill="#253786"
								></path>
								<path
									d="M404.98 89.19c3.24 0 5.77.87 7.83 2.53l-2.64 3.73c-1.74-1.22-3.64-1.88-5.33-1.88-1.28 0-1.9.54-1.9 1.22v.05c0 .87.65 1.25 3.29 1.85 4.38.95 7.1 2.37 7.1 5.93v.05c0 3.89-3.07 6.2-7.7 6.2-3.37 0-6.58-1.06-8.92-3.16l2.94-3.51c1.88 1.5 3.97 2.28 6.17 2.28 1.41 0 2.18-.49 2.18-1.31v-.05c0-.79-.63-1.22-3.21-1.82-4.05-.93-7.18-2.07-7.18-5.98v-.05c-.01-3.52 2.8-6.08 7.37-6.08m0-2c-5.52 0-9.37 3.33-9.37 8.09v.05c0 2.65 1.08 4.36 2.58 5.52l-.07.08-2.94 3.51-1.24 1.48 1.44 1.29c2.64 2.36 6.28 3.67 10.26 3.67 5.8 0 9.7-3.3 9.7-8.2v-.05c0-3.07-1.59-4.92-3.5-6.06l2.61-3.69 1.09-1.54-1.47-1.18c-2.5-2-5.47-2.97-9.09-2.97z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M433.43 109.56V95.14h-5.71v-6.63h18.7v6.63h-5.71v14.42h-7.28z"
								></path>
								<path
									d="M445.42 89.51v4.62h-5.71v14.42h-5.28V94.14h-5.71v-4.62h16.7m2-2.01h-20.7v8.62h5.71v14.42h9.28V96.14h5.71v-8.63z"
									fill="#ffffff"
								></path>
								<path
									fill="#253786"
									d="M461.17 109.56V88.51h17.31V95h-10.09v.89h9.14v6.16h-9.14v1.02h10.23v6.49h-17.45z"
								></path>
								<path
									d="M477.48 89.51V94h-10.09v2.88h9.14v4.16h-9.14v3.02h10.23v4.49h-15.45V89.51h15.31m2-2h-19.32v23.04h19.45v-8.49h-1.09V96h.95v-8.49h.01z"
									fill="#ffffff"
								></path>
							</g>
						</svg>
					</div>
					<div className="list">
						<ul>
							<li>expertise</li>
							<li>expertise</li>
							<li>expertise</li>
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Header;
