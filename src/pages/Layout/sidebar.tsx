import { pages } from "@/router"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Sidebar() {
	const navigate = useNavigate()
	return <SCSideBar>
		{pages.map(page => {
			return <SCMenuItem onClick={() => page.path && navigate(page.path)}>
				{page.title}
			</SCMenuItem>
		})}
	</SCSideBar>
}

const SCSideBar = styled.div`
	padding: 1rem 0.25rem;
	background-color: #f5f5f5;
	height: 100%;
`
const SCMenuItem = styled.div`
	background-color: #fff;
	border-radius: 5px;
	font-size: 14px;
	margin: 1px;
	padding: 1px 1rem;
	&:hover {
		background-color: #e5e5e5;
		cursor: pointer;
	}
`