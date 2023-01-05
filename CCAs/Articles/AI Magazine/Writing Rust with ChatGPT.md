#CCAs/Magazines/AI

# Abstract

I adore programming. Over the coming on 8 years I've been scripting and working on programs with computers, I've managed to become pretty proficient - I've made lots of utilities, a little bit of money and a few games, without using game engines. I love it so much that I one day wish to do it as my forever job, but right now I am scared - AI chatbots are advancing faster than I ever thought possible and every year they seem to get better and better - we make predictions and roadmaps for the next 10 years thinking optimistically, only to see those very predictions come out the next month.

Earlier this year, we saw the launch of DALLE-2 and numerous other AI art generators, and lots of art communicators being terrified, and now its my turn; at the end of November 2022, ChatGPT was released to the public and people seemed to go crazy for it - within the day we saw people bypassing the built-in OpenAI restrictions (for example, getting it to write a biography for murderers or fictional people by asking it to finish a code sample that would return it), or people using it to write code, which is the part that scares me. 

However, having had a further look at ChatGPT, I feel that it can coexist with tools like Github Copilot, for there are many issues with it, which I'll demonstrate by writing a series of Rust programs with increasing complexity.

# What is Rust?
Rust is an open-source systems programming language, which had its 1.0.0 release in 2015. It is famed for its safety features around pointers and concurrency, which can be seriously dangerous tools in low-level languages like C. However, Rust differentiates itself from high-level languages like Python by still allowing their use if the programmer feels they understand enough. 

For these examples, I'll always ensure to add comments for those less in the know, but some basic programming knowledge will be needed to fully appreciate this article.

I've also decided to use Rust here over other languages because I know it very well, meaning that I can easily spot basic syntax errors as well as more complicated logic errors. Rust also has incredible tooling - a very friendly compiler which can often fix syntax errors almost by itself as well as tools to audit code and ensure paradigms are kept to.

# Program 1 - Number guessing game
Most people learn Rust using *The Book*, which is an open-source maintained digital book that aims to teach Rust from zero to a level where you can learn more yourself. One of the first projects listed in the book is the number guessing game, where the binary creates a random number within some bounds, and then the user has to guess the answer and the program tells them too high or too low.

Since this program likely appears often online from the book itself, I think that ChatGPT will have an easy time creating it.

## ChatGPT answer

Using this prompt:
> Create a random number guessing game in Rust with comments.

I got the following Rust code as output:
```rust
use rand::Rng; // used for generating a random number

fn main() {
    println!("Welcome to the random number guessing game!");

    let secret_number = rand::thread_rng().gen_range(1, 101); // generate a random number between 1 and 100 (inclusive)

    println!("Please input your guess:");

    let mut guess = String::new(); // create a new, empty string to hold the user's guess

    std::io::stdin()
        .read_line(&mut guess) // read a line of input from the user
        .expect("Failed to read line"); // handle any errors that may occur

    let guess: u32 = guess.trim().parse().expect("Please type a number!"); // parse the user's input as a 32-bit unsigned integer and handle any errors that may occur

    // compare the user's guess to the secret number and print an appropriate message
    if guess < secret_number {
        println!("Too small!");
    } else if guess > secret_number {
        println!("Too big!");
    } else {
        println!("You win!");
    }
}
```

## Comments
This program fails to compile as it uses `(1, 101)` for the arguments to `gen_range` when it would need to use `(1..101)`. This is a pretty basic syntax error, but upon telling ChatGPT about the existence of an error it continues to be confidently incorrect, and gets the same error. This demonstrates the first major problem when programming with ChatGPT - **ChatGPT is often confidently incorrect**. Because of the way the AI are trained, it cannot evaluate the code for real, and thus if the input contains errors or it incorrectly extrapolates then it will be wrong. Some have joked that programming now goes from 2 hours writing and 4 hours debugging to 30s writing and 12 hours debugging. Whilst these numbers obviously change, the ratios remain and ChatGPT code is harder to debug, simply for the fact that you didn't write it.

This also doesn't follow some custom Rust idioms. For example, it is custom to have the main function return a `Result`, which can indicate either success or failure. Then, instead of using `expect`, which panics the whole program, you just put the errors up using the `?` try operator. Another failure is the `if-else`, which should instead use `Ordering` in a switch statement.

Finally, it doesn't show you how to structure a project or how to add dependencies, like `rand` which gets used for the random numbers.


# Program 2 - Brain**** Interpreter
Brain**** (referred to henceforth as Brain) is an esoteric language with a very small instruction set which makes it ideal for a starter programming project.

## ChatGPT Answer

Using this prompt:
> Please generate a rust Brainfuck interpreter with comments

I got the following answer:
```rust
// First, we'll define a constant for the size of the BrainFuck memory tape.
// This is an arbitrary number, but a common choice is 30000 cells.
const TAPE_SIZE: usize = 30000;

// Next, we'll define a struct to represent the state of the BrainFuck interpreter.
// This includes the memory tape, a pointer to the current cell on the tape, and the source code of the program.
struct Interpreter {
    tape: [u8; TAPE_SIZE], // the memory tape
    pointer: usize, // the pointer to the current cell on the tape
    code: Vec<u8>, // the source code of the program
}

// Now, we'll implement the `Interpreter` struct.
impl Interpreter {
    // This is the constructor for the `Interpreter` struct. It initializes the tape with all zeros,
    // sets the pointer to the first cell on the tape, and stores the source code.
    fn new(code: Vec<u8>) -> Self {
        Self {
            tape: [0; TAPE_SIZE],
            pointer: 0,
            code,
        }
    }

    // This method runs the interpreter. It loops through the source code,
    // interpreting each character and updating the state of the interpreter accordingly.
    fn run(&mut self) {
        // We'll use `code_ptr` to keep track of the current position in the source code.
        let mut code_ptr: usize = 0;

        // This loop will continue until the end of the source code is reached.
        while code_ptr < self.code.len() {
            // Get the current character from the source code.
            let c = self.code[code_ptr];

            // Interpret the character and update the state of the interpreter.
            match c {
                b'>' => self.pointer += 1, // move the pointer to the right
                b'<' => self.pointer -= 1, // move the pointer to the left
                b'+' => self.tape[self.pointer] += 1, // increment the value at the current cell
                b'-' => self.tape[self.pointer] -= 1, // decrement the value at the current cell
                b'.' => print!("{}", self.tape[self.pointer] as char), // print the value at the current cell as a character
                b',' => {
                    // read a character from the input and store it in the current cell
                    let mut input = [0];
                    std::io::stdin().read(&mut input).unwrap();
                    self.tape[self.pointer] = input[0];
                },
                b'[' => {
                    // if the value at the current cell is zero, jump to the corresponding ']'
                    if self.tape[self.pointer] == 0 {
                        let mut nest_level = 1;
                        while nest_level > 0 {
                            code_ptr += 1;
                            if self.code[code_ptr] == b'[' {
                                nest_level += 1;
                            } else if self.code[code_ptr] == b']' {
                                nest_level -= 1;
                            }
                        }
                    }
                },
                b']' => {
                    // if the value at the current cell is non-zero, jump back to the corresponding '['
                    if self.tape[self.pointer] != 0 {
                        let mut nest_level = 1;
                        while nest_level > 0 {
                            code_ptr -= 1;
                            if self.code[code_ptr] == b']' {
                                nest_level += 1;
                            } else if self.code[code_ptr] == b'[' {
                                nest_level -= 1;
                            }
                        }
                    }
                },
                // ignore any other characters
                _ => (),
            }

            // move on to the next character in the source code
            code_ptr += 1;
        }
    }
}

// Finally, we'll define a function to parse the source code and run the interpreter.
fn run_brainfuck(code: &str) {
    // create an `Interpreter` instance and run it
    let mut interpreter = Interpreter::new(code.bytes().collect());
    interpreter.run();
}
```

## Comments
Here, the code makes 1 fundamental mistake that no compiler will tell you - `Stdin` has no `read` method, and you must instead use `read_line`, but this is another simple syntax error. However, you might still have trouble finding that if you don't fully know the language.

I alluded to this earlier, but would like to expand more on it now - I have no idea what most of this code does. Whilst yes, it does work for at least a simple `Hello, World!`, I have very little way to test it. I asked it to write some code for a library, and it spat out what appeared to be perfect code, but a) I had no way to verify it because b) that library itself has a fundamental issue that ChatGPT doesn't know about - it's long abandoned and has logic errors in the OpenSSL code which means that it can never work.

There are also far more comments here than there were earlier, and this alludes to another problem: **The quality of code can vary greatly.** When I try to get it to write a JIT compiler, it seems to write a skeleton rather than any actual methods.

# Conclusion

ChatGPT needs to be carefully used to speed up coding, rather than as a replacement to people and whilst companies may see short-term gains by replacing programmers with prompt-writers, they will see long-term loss as their code silently fails with nobody able to fix it.