# code-smell typescript
## Some solutions with design patterns


# init project

```terminal
     npm run start
```

### Run file:

```terminal
     npx ts-node src/NAME_FILE
```




# SOLID:

## S:


## O:

## L:

```typescript 
abstract class Ave {
	abstract bicar(): void;
    abstract voar(): void;
}

class PicaPau extends Ave {
    bicar(): void {
        // ...
    }
		
    voar(): void {
	    //...
    }
} 

class Pinguim extends Ave {
    bicar(): void {
        //...
    }
        
    voar(): void {
	    // PROBLEMA, pinguim não voa...
    }
}

```

## I: interface segregation principle

É o mesmo problema da classe Pinguim onde ele não pode voar.
Mesmo assim vamos dar um outro exemplo:

### Forma errada:
```typescript
interface Robot {
  spinAround(): void;
  rotateArms(): void;
  wiggleAntennas(): void;
}

class AdvancedRobot implements Robot {
	spinAround(): void {
		console.log("Advanced Robot spinning around");
	}

	rotateArms(): void {
		console.log("Advanced Robot rotating arms");
	}

	wiggleAntennas(): void {
		console.log("Advanced Robot wiggle antennas");
	}
}

class BasicRobot implements Robot {
  spinAround(): void {
    console.log("Basic Robot spinning around");
  }

  rotateArms(): void {
    console.log("Basic Robot rotating arms");
  }

  wiggleAntennas(): void {
    // Basic Robot não tem antenas, mas é forçado a implementar o método
    throw new Error("Basic Robot não pode mexer as antenas");
  }
}
```
### Forma correta:
```typescript
interface SpinningRobot {
	spinAround(): void;
}

interface ArmRotatingRobot {
	rotateArms(): void;
}

interface AntennaWigglingRobot {
	wiggleAntennas(): void;
}

class BasicRobot implements SpinningRobot, ArmRotatingRobot {
	spinAround(): void {
		console.log("Basic Robot spinning around");
	}

	rotateArms(): void {
		console.log("Basic Robot rotating arms");
	}	
}

class AdvancedRobot implements SpinningRobot, ArmRotatingRobot, AntennaWigglingRobot {
	spinAround(): void {
		console.log("Advanced Robot spinning around");
	}

	rotateArms(): void {
		console.log("Advanced Robot rotating arms");
	}

	wiggleAntennas(): void {
		console.log("Advanced Robot wiggling antennas");
	}
}
 ```

## D:

