async function fetchUserData() {
    // Simulating a delay of 3 seconds to fetch user data
    await new promise(resolve => setTimeout(resolve, 3000));
    return { name: "John Doe", age:30, email: "John@example.com" };
}
// can't use await without using async
// helps having to avoid chainging promises together
async function displayUserData() {
    try {

        const userData = await fetchUserData();


        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = 'Name: ${userData.name}, Age: ${userData.age}, Email: ${userData.email}';
    } catch (error) {
        console.error("Error fetching user data:", error);
        const userInfoElement = document.getElementById('userInfo');
        userInfoElement.textContent = "Failed to fetch user data";
    }
}

document.addEventListener('DOMContentLoaded', displayUserData);