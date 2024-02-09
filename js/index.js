let pronoun = ['my','her'];
let adj = ['gorgeous','inspiring'];
let noun = ['novel','project'];
let domain = ['.com','.net','.io','.es'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let h = 0; h < noun.length; h++) {
            for (let u = 0; u < domain.length; u++) {
                console.log(pronoun[i]+adj[j]+noun[h]+domain[u]);
            }
        }
    }
}