import { Route } from "@/router";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sidebar(prop: { pages: Route[] }) {
	const { pages } = prop;
	const navigate = useNavigate();

	return (
		<Root>
			{pages.map(p => (
				<Item
					key={p.path}
					onClick={() => navigate(p.path || '/')}
				>
					{p.icon}{p.title}
				</Item>
			))}
		</Root>
	)
};

const Root = styled.div`
	max-width: 15rem;
	min-width: 15rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.text};
	border-radius: 0.75rem;
	margin: 0.5rem;
	padding: 0.75rem;
	border-right: 2px solid #f0f0f0;
`
const Item = styled.div`
	user-select: none;
	border-radius: 0.5rem;
	padding: 4px 0.75rem;
  gap: 0.75rem;
  display: flex;
  align-items: center;
	&:hover{
		cursor: pointer;
		background-color: #f5f5f5
	}
`