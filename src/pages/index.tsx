import { styled } from "../styles"

const Button = styled('button', {
  backgroundColor: "$rocketseat",
  borderRadius: "8px",
  border: 0,
  padding: "4px 8px",

  span: {
    fontWeight: "bold",
  },

  "&:hover": {
    filter: "brightness(0.81)",
    cursor: "pointer"
  }
});

export default function Home() {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}
