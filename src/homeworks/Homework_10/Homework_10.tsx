import { useState, useEffect } from "react";
import axios from "axios";
import { v4 } from "uuid";
import Button from "components/Button/Button";

import { PageWrapper, ContainerJoke, Card, Text, ErrorText } from "./styles";

function Homework_10() {
    const [joke, setJoke] = useState<string[]>([]);
    const [error, setError] = useState<undefined | string>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const JOKE_URL: string = "https://api.chucknorris.io/jokes/random";

    const getJoke = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(JOKE_URL);
            console.log(response.data.value);
            setJoke((prevValue: string[]) => {
                return [...prevValue, response.data.value];
            });
        } catch (error: any) {
            setError("Some Network error");
        } finally {            setIsLoading(false);
        }
    };

    const jokes = joke.map((joke: string) => {
        return <Text key={v4()}>{joke}</Text>;
    });

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <PageWrapper>
            <Card>
                <ContainerJoke>
                    {isLoading && <Text>Loading...</Text>}
                    {error && <ErrorText>{error}</ErrorText>}
                    {jokes}
                </ContainerJoke>
                <Button disabled={isLoading} onClick={getJoke} name="Get joke" />
            </Card>
        </PageWrapper>
    );
}

export default Homework_10;