---
sidebar_position: 20
title: Sur les poussières d'output et l'explosion des états
---

Cet article fait suite à un brainstorming entre [Cheng](https://github.com/polarker) et [Tom](https://github.com/tshabs)

Considérons principalement les blockchains basées sur UTXO. L'état de ce type de blockchain dépend principalement du nombre d'UTXO. Pour atténuer le problème de l'explosion des états, nous aurons besoin d'une conception appropriée pour invalider les UTXO de faible valeur.

Supposons également que tous les UTXO sont de taille égale. Le problème de l'explosion des états peut alors être réduit à la limitation du nombre d'UTXO. Comme le protocole blockchain applique les mêmes règles de validation à chaque UTXO, une limite supérieure du nombre d'UTXO signifie une limite inférieure du nombre de jetons par UTXO (l'inflation et la déflation ne sont pas prises en compte car les taux de ces deux phénomènes ne sont généralement pas si élevés). Par conséquent, nous arrivons à la conclusion qu'une limite inférieure est nécessaire.

Cependant, il est presque impossible de trouver une limite inférieure fixe pour le nombre de jetons par UTXO. Par exemple, pour le Bitcoin, 1mBTC pouvait être une limite inférieure raisonnable il y a 10 ans, mais elle ne peut plus être utilisée de nos jours. La deuxième solution consiste à trouver une limite inférieure dynamique qui dépend de l'état actuel de la blockchain. Idéalement, la limite inférieure devrait rendre impossible ou coûteux pour les attaquants de gonfler les états. Lorsque la valeur marchande de la blockchain est faible, le coût de l'attaque est faible de toute façon, donc la limite inférieure doit être élevée pour rendre impossible la création insensée de nouveaux utxos. Lorsque la valeur marchande de la blockchain augmente, la limite inférieure peut être réduite.

@Tom a suggéré de concevoir une telle limite inférieure basée sur la moyenne des frais de transmission des derniers blocs. Cependant, la plupart des blockchains auraient une "limite de gaz" comme Ethereum. Lorsque le réseau est très encombré, les frais de transmission sont toujours égaux à la limite de gaz. Dans ce cas, la limite inférieure ne sera pas assez dynamique à long terme. Cependant, avec une limite de gaz dynamique comme EIP1559, elle pourrait être performante.

@Cheng a suggéré de concevoir la limite inférieure sur la base du taux de hachage de la blockchain. Théoriquement, le taux de hachage est un bon indice pour la consommation d'énergie et la récompense des blocs en fiat. En pratique, lorsqu'on utilise un algorithme de minage simple et efficace comme Sha256, le coût par taux de hachage est assez stable et prévisible à long terme. La limite inférieure peut être inversement proportionnelle à (hash_rate / coinbase_reward) si l'on suit cette conception.

Comme l'a noté @Tom, il y a un cas limite où un UTXO pourrait être au-dessus de la limite inférieure lorsqu'il est créé, mais plus tard pourrait être invalide avec une nouvelle limite inférieure. Il y a deux façons de traiter ce problème : 1) supprimer activement ces UTXO invalides, mais cela mettra probablement les utilisateurs en colère et compliquera également le système ; 2) laisser le système en place et les utilisateurs pourront toujours l'utiliser car chaque tx peut inclure plusieurs entrées. Notez que cela n'est pas possible pour le jeton natif d'Ethreum, car il ne peut y avoir qu'un seul appelant pour chaque tx Eth.
