function Validate(target: any, propertyKey: string, parameterIndex: number) {
    if (!target._validators) {
        target._validators = {};
    }
    if (!target._validators[propertyKey]) {
        target._validators[propertyKey] = [];
    }
    target._validators[propertyKey].push(parameterIndex);
  }
  
  function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
        console.log(`Method: ${propertyKey} was called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    };
  
    return descriptor;
  }
  
  class UserService {
    private _validators: Record<string, number[]> = {};
    private users: { id: number; name: string }[] = [];
  
    @LogMethod
    addUser(@Validate id: number, @Validate name: string) {
        const invalidParams = this.validateParameters('addUser', arguments);
        if (invalidParams.length > 0) {
            throw new Error(`Invalid parameters: ${invalidParams.join(', ')}`);
        }
  
        this.users.push({ id, name });
        console.log(`User added: { id: ${id}, name: "${name}" }`);
    }
  
    @LogMethod
    listUsers() {
        console.log('User list:', this.users);
    }
  
    private validateParameters(methodName: string, args: IArguments): string[] {
        const invalidParams: string[] = [];
        if (this._validators && this._validators[methodName]) {
            for (const paramIndex of this._validators[methodName]) {
                if (!args[paramIndex]) {
                    invalidParams.push(`Parameter #${paramIndex + 1}`);
                }
            }
        }
        return invalidParams;
    }
  }
  
  const service = new UserService();
  try {
    service.addUser(1, 'John Doe');
    service.addUser(2, '');
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
  } else {
      console.error('An unknown error occurred');
  }
  }
  service.listUsers();
  