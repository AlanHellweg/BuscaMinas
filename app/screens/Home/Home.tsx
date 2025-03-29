import { Pressable, View } from "react-native";
import Container from "../../atoms/Container";
import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import { styles } from "./styles";

const Home = () => {
  return (
    <Container>
      <View style={styles.contTitle}>
        <Text variant="h2" color="text" style={styles.title}>
          Busca Minas
        </Text>
        <Icon icon="bombIcon" width={35} />
      </View>
      <View>
        <Pressable>
          <Text variant="h4" color="text">
            Jugar
          </Text>
        </Pressable>
        <Pressable>
          <Text variant="h4" color="text">
            Configuración
          </Text>
        </Pressable>
        <Text>Creado por Alan</Text>
      </View>
    </Container>
  );
};

export default Home;
