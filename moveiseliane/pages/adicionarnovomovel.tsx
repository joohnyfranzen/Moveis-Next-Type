import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from "@chakra-ui/react";

export default function AdicionarNovoMovel() {
  return (
    <div>
      <FormControl>
        <FormLabel>Nome do Produto</FormLabel>
        <Input type="text" />
        <FormLabel>Preço do Produto</FormLabel>
        <NumberInput max={50} min={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button colorScheme="teal" variant="outline">
          Adicionar Imagem
        </Button>
        <Button colorScheme="teal" variant="solid">
          Finalizar Produto
        </Button>
      </FormControl>
    </div>
  );
}
